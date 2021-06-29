import React, { useState }  from "react"
import axios from "axios"
import { useQuery, useQueryClient } from "react-query"
import { Stack, Text, Flex, Button } from '@chakra-ui/react'
import BookListItem, { BookListItemSkeleton } from "./BookListItem"
import { IBookModel } from './interfaces'
import BookModal from './BookModal'
import { api } from '../api'

interface BookListProps {
    displayMode: "list" | "grid"
    view: "books" | "archived"
}

const BookList: React.FC<BookListProps> = ({ displayMode, view }) => {
    const queryClient = useQueryClient()
    const [openBook, setOpenBook] = useState(-1)
    const [page, setPage] = useState(0)

    const query = useQuery(['books', `page:${page}`, `view:${view}`], () =>
        axios.get(`${api.url}/books?archived=${view === "archived"}&skip=${page*10}&limit=${100}`).then(r => r.data)
        ,{ keepPreviousData: true }
    )

    const books: JSX.Element = query.isSuccess && query.data
        ? query.data.map((book: IBookModel, i: number) => (
            <li key={`key-${i}`}>
                <BookListItem book={book} displayMode={displayMode} onClick={() => setOpenBook(i)}/>
            </li>
        ))
        : null

    return (
        <>
            <ul style={{ listStyle: "none" }}>
                {query.isLoading && (
                    <Stack>
                        <BookListItemSkeleton/>
                        <BookListItemSkeleton/>
                        <BookListItemSkeleton/>
                        <BookListItemSkeleton/>
                    </Stack>
                )}
                {view === "books" && query.isSuccess && !query.data.length && (
                    <Text fontSize="2xl" color="blue.700" fontWeight="semibold">Add a book to get started</Text>
                )}
                {displayMode === "grid"
                    ? (
                        <Flex flexDirection="row" gridGap="5" flexWrap="wrap">
                            {books}
                        </Flex>
                    ) : books
                }
            </ul>
            <Flex gridGap="2" marginY="5" align="center" justify="center">
                {query.data && (query.data.length % 10 !== 0)
                    ? (<Button disabled onClick={() => setPage(prev => prev+1)} isLoading={query.isLoading} loadingText="Loading">Load more</Button>)
                    : <Text fontSize="md">
                        {view === "books" ? "-- End of bookshelf --" : "No Archived Books to Show"}
                    </Text>
                }
            </Flex>
            {openBook > -1 && <BookModal book={query.data[openBook]} open={openBook > -1} onClose={() => setOpenBook(-1)}/>}
        </>
    )
}

export default BookList