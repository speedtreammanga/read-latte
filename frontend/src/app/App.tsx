import React, { useState } from 'react';
import { ChakraProvider, extendTheme, Flex, Button, IconButton } from "@chakra-ui/react"
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { FiMenu, FiGrid, FiArchive, FiBook } from "react-icons/fi"
import BookList from './BookList';
import AddBook from './AddBook';

const theme = extendTheme({
})
const queryClient = new QueryClient()

function App() {
  const [displayMode, setDisplayMode] = useState<"list"|"grid">("list")
  const [view, setView] = useState<"books"|"archived">("books")
  return (
    <QueryClientProvider  client={queryClient}>
      <ChakraProvider theme={theme}>
        <Flex maxW="800px" align="center" justify="center" direction="column" padding="0 10px" margin="0 auto">
          <AddBook />
          <Flex align="center" width="100%" justify="space-between">
            <Flex marginY="5" alignSelf="flex-start" align="flex-start" justify="center" gridGap="3">
              <Button onClick={() => setView("books")} leftIcon={<FiBook/>} variant={view === "books" ? "solid" : "outline"} aria-label="books view">
                Books
              </Button>
              <Button onClick={() => setView("archived")} leftIcon={<FiArchive/>} variant={view === "archived" ? "solid" : "outline"} aria-label="archived view">
                Archived
              </Button>
            </Flex>
            <Flex marginY="5" alignSelf="flex-end" align="flex-end" justify="center" gridGap="3">
              <IconButton  onClick={() => setDisplayMode("list")} icon={<FiMenu/>} variant={displayMode === "list" ? "solid" : "outline"} aria-label="display list mode" />
              <IconButton onClick={() => setDisplayMode("grid")} icon={<FiGrid/>} variant={displayMode === "grid" ? "solid" : "outline"} aria-label="display grid mode" />
            </Flex>
          </Flex>
          <BookList displayMode={displayMode} view={view}/>
        </Flex>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  );
}

export default App;
