import React, { useCallback, useState } from "react"
import axios from 'axios'
import { Drawer, DrawerOverlay, DrawerContent, Box, Image, Flex, Text, Link, IconButton, DrawerBody, List, ListItem, Spinner, Badge } from '@chakra-ui/react'
import { IBookModel, TocItem } from "./interfaces"
import { BsStarFill } from 'react-icons/bs'
import { FiExternalLink, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { useQueryClient, useQuery, useMutation } from "react-query/react"
import { useEffect } from "react"

interface BookModalProps {
    book: IBookModel
    open: boolean
    onClose(): void
}

const BookModal: React.FC<BookModalProps> = ({ book, open, onClose }) => {
    const queryClient = useQueryClient()
    const [tocParsed, setTocParsed] = useState<TocItem[]|null>(null)
    const [tocIndexBeingUpdated, setTocIndexBeingUpdated] = useState(-1)
    const [doneManipulatingTocJSON, setDoneManipulatingTocJSON] = useState(true)

    useEffect(() => {
        if (!book.toc) return
        setTocParsed(JSON.parse(book.toc))
    }, [book])

    const mutation = useMutation((updatedToc: string) =>
        axios.patch(`http://localhost:8080/books/${book._id}`, { toc: updatedToc }).then(r => r.data)
        , {
            onSuccess: (book: IBookModel) => queryClient.invalidateQueries(['books', book._id]),
            // onSuccess: (book: IBookModel) => queryClient.setQueryData(['books', book._id], () => book)
            onSettled: () => setDoneManipulatingTocJSON(true)
        }
    )

    // TODO: find a better way to update store, and right way to initialize data.
    // taking too much time to render component...
    const { data } = useQuery(['books', book._id], () =>
        axios.get(`http://localhost:8080/books/${book._id}`).then(r => r.data)
        , {
            initialData: queryClient.getQueryData(['books', book._id]),
            onSuccess: (book: IBookModel) => queryClient.setQueryData(['books', 'page:0', 'view:books'], (old) => { 
                return (old as any).map((d: IBookModel) => d._id === book._id ? book : d)
            })
            // onSuccess: (book: IBookModel) => queryClient.setQueryData(['books', book._id], book)
        }
    )

    const onTocCheck = useCallback((tocIndex: number) => {
        if (!tocParsed) return

        setTocIndexBeingUpdated(tocIndex)
        setDoneManipulatingTocJSON(false)

        const updatedTocParsed = [...tocParsed]
        const tocElem = updatedTocParsed[tocIndex]
        updatedTocParsed.splice(tocIndex, 1, { ...tocElem, read: !tocElem.read })
        
        setTocParsed(prev => prev ? updatedTocParsed : null)

        mutation.mutate(JSON.stringify(updatedTocParsed))

    }, [tocParsed, mutation])

    return (
        <Drawer size="xl" isOpen={open} onClose={onClose} autoFocus={false}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody>
                    <Flex flexDir="column" padding="20px">
                        <Box position="absolute" right="16px" top="16px">
                            {/* <BookListItemActionMenu variant="outline" onArchive={onArchive} /> */}
                        </Box>
                        <Flex flexDir="row" gridGap="6" >
                            <Image src={book.img} h="200px" w="150px" cursor="pointer" flexShrink="unset" alt={`book cover - ${book.title}`}/>
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
                                    {book.description}
                                </Text>
                            </Flex>
                        </Flex>
                        {tocParsed && (
                            <>
                            <Flex gridGap="16px" align="center" justify="flex-start">
                                <Text fontSize="xl" marginY="20px" fontWeight="semibold">
                                    Table of Content
                                </Text>
                                <Badge colorScheme="blue">
                                    {tocParsed.reduce((count, toc: TocItem) => toc.read ? count+1 : count, 0)}
                                    {` / ${tocParsed.length} COMPLETED`}
                                </Badge>
                            </Flex>
                            <List>
                                {tocParsed.map((toc: TocItem, i: number) => (
                                    <ListItem display="flex" alignItems="center" key={`${book._id}-toc-${i}`} paddingLeft={`${Number(toc.level) * 25}px`}>
                                        <IconButton
                                            variant="ghost"
                                            aria-label="toggle chapter"
                                            icon={toc.read ? <FiCheckCircle/> : <FiCircle/>}
                                            color={toc.read ? "blue.400" : "gray.300"} 
                                            disabled={mutation.isLoading}
                                            onClick={() => onTocCheck(i)}
                                        />
                                        <Link href={toc.uri} isExternal>
                                            <Text fontSize="sm" color="gray.800" fontWeight={toc.level === "1" ? "semibold" : "normal"}>{toc.title}</Text>
                                        </Link>
                                        {(mutation.isLoading || !doneManipulatingTocJSON) && tocIndexBeingUpdated === i && (
                                            <Spinner marginLeft="10px" size="xs" color="gray.500" speed="1.25s" emptyColor="gray.300"/>
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                            </>
                        )}
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default BookModal