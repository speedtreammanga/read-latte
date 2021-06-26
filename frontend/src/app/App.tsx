import React from 'react';
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react"
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import BookList from './BookList';
import AddBook from './AddBook';

const theme = extendTheme({
})
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider  client={queryClient}>
      <ChakraProvider theme={theme}>
        <Flex maxW="800px" align="center" justify="center" direction="column" padding="0 10px" margin="0 auto">
          <AddBook />
          <BookList />
        </Flex>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  );
}

export default App;
