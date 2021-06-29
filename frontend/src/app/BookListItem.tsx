import React  from "react"
import { Box, Image, Flex, Text, Link, Menu, MenuButton, MenuList, MenuItem, IconButton, Skeleton, SkeletonText, Badge } from '@chakra-ui/react'
import { BsStarFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FiExternalLink, FiTrash2, FiArchive } from 'react-icons/fi'
import { useMutation, useQueryClient } from "react-query"
import { IBookModel } from './interfaces'
import axios, { AxiosResponse } from "axios"
import { api } from '../api'

export const BookListItemSkeleton: React.FC = () => (
    <Box p="5" maxW="800px" borderRadius="md" mb="6" borderWidth="1px" position="relative">
        <Flex flexDir="row" gridGap="6" >
            <Skeleton w="150px" h="200px" />
            <Flex flexDir="column" gridGap="1">
                <Skeleton w="650px" h="28px" />
                <Skeleton mt="2" w="365px" h="24px" />
                <Skeleton mt="1" w="300px" h="20px" />
                <Skeleton mt="1" w="150px" h="20px" />
                <SkeletonText mt="3" noOfLines={4} spacing="3" />
            </Flex>
        </Flex>
    </Box>
)

interface BookListItemActionMenuProps {
    variant: "solid"|"outline",
    archived: boolean,
    onArchive(archived:boolean): void,
    onDelete(): void
}

const BookListItemActionMenu: React.FC<BookListItemActionMenuProps> = props => {
    return (
        <Menu isLazy>
            <MenuButton as={IconButton} icon={<BsThreeDotsVertical/>} variant={props.variant} aria-label="Options" borderRadius="sm">
                Actions
            </MenuButton>
            <MenuList>
                {props.archived && (
                    <MenuItem onClick={() => props.onArchive(false)} >
                        Restore
                    </MenuItem>
                )}
                <MenuItem
                    color={props.archived ? "red.500" : "orange.500"}
                    icon={props.archived ? <FiTrash2/> : <FiArchive/>}
                    onClick={() => props.archived ? props.onDelete() : props.onArchive(true)}
                >
                    {props.archived ? "Delete" : "Archive"}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

interface BookListItemComponentProps {
    book: IBookModel
    onArchive: (archived: boolean) => void
    onDelete: () => void
    onClick(): void
}

const BookListItemMini: React.FC<BookListItemComponentProps> = ({ book, onArchive, onClick, onDelete }) => {
    return (
        <Box w="168px" p="2" borderRadius="md"  borderWidth="1px" position="relative" flexDirection="column" gridGap="6">
            <Flex flexDirection="column" gridGap="3">
                <Box position="absolute" right="16px" top="16px">
                    <BookListItemActionMenu variant="solid" onArchive={onArchive} onDelete={onDelete} archived={book.archived}/>
                </Box>
                {book.archived && (<Badge colorScheme="red" position="absolute" margin="10px 5px">Archived</Badge>)}
                <Image onClick={onClick} src={book.img} cursor="pointer" h="200px" w="150px" alt={`book cover - ${book.title}`}/>
                <Link href={book.uri} isExternal>
                    <Text isTruncated fontSize="lg" color="blue.700" fontWeight="semibold" lineHeight="shorter">
                        {book.title}
                    </Text>
                </Link>
            </Flex>
        </Box>
    )
}

const BookListItemLarge: React.FC<BookListItemComponentProps> = ({ book, onArchive, onClick, onDelete }) => (
    <Box p="5" maxW="800px" borderRadius="md" mb="6" borderWidth="1px" position="relative">
        <Box position="absolute" right="16px" top="16px">
            <BookListItemActionMenu variant="outline" onArchive={onArchive} onDelete={onDelete} archived={book.archived}/>
        </Box>
        {book.archived && (<Badge colorScheme="red" position="absolute" margin="10px 5px">Archived</Badge>)}
        <Flex flexDir="row" gridGap="6" >
            <Image onClick={onClick} src={book.img} h="200px" w="150px" cursor="pointer" flexShrink="unset" alt={`book cover - ${book.title}`}/>
            <Flex flexDir="column" gridGap="1">
                <Link href={book.uri} isExternal>
                    <Text fontSize="2xl" color="blue.700" fontWeight="semibold" lineHeight="shorter" justify="center" paddingRight="50px">
                        {book.title}
                        <FiExternalLink style={{ display: "inline", margin: "0 10px 3px" }} />
                    </Text>
                </Link>
                <Text fontSize="md" color="blue.800" fontWeight="semibold">
                    {book.authors}
                </Text>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                    Released {book.release_date}
                </Text>
                <Flex align="center">
                    <Box as={BsStarFill} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                        <b>{book.stars > 0 ? book.stars : "Not yet rated"}</b>
                    </Text>
                    <Text ml={1} fontSize="sm">
                        / 5
                    </Text>
                </Flex>
                <Text fontSize="sm" color="gray.700">
                    {book.description.length > 270 ? book.description.slice(0, 270).trim() + "..." : book.description}
                </Text>
            </Flex>
        </Flex>
    </Box>
)

interface BookListItemProps {
    book: IBookModel
    displayMode: "list"|"grid"
    onClick(): void
}
const BookListItem: React.FC<BookListItemProps> = ({ book, displayMode, onClick }) => {
    const queryClient = useQueryClient()

    const mutation = useMutation((endpoint: () => Promise<AxiosResponse<any>>) => endpoint().then(r => r.data)
        , {
            // onSuccess: (book) => queryClient.setQueryData('books', old => {
            //     return old.map(d => d._id === book._id ? book : d)
            // })
            onSuccess: (book) => queryClient.invalidateQueries('books')
        }
    )

    const componentProps = {
        book
        ,onClick
        ,onArchive: (archived: boolean) => mutation.mutate(() => axios.patch(`${api.url}/books/${book._id}`, { archived }))
        ,onDelete: () => mutation.mutate(() => axios.delete(`${api.url}/books/${book._id}`))
    }

    return displayMode === "grid"
        ? <BookListItemMini {...componentProps}/>
        : <BookListItemLarge {...componentProps}/>
}

export default BookListItem