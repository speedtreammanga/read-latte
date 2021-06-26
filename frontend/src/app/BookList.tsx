import React  from "react"
import axios from "axios"
import { Box, Image, Flex, Text, Link } from '@chakra-ui/react'
// import { Box, Image, Flex, Badge, Text } from '@chakra-ui/core';
import { BsStarFill } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { useQuery, useQueryClient } from "react-query"

export interface TocItem {
    title: string,
    uri: string,
    level: string,
    read: boolean
}

export interface IBookModel {
    uri: string;
    title: string;
    img: string;
    description: string;
    isbn: string;
    authors: string;
    release_date: string;
    deleted: boolean;
    stars: number;
    toc: TocItem[];
}

const mockBooks: IBookModel[] = [
    {
        uri: "https://learning.oreilly.com/library/view/hands-on-smart-contract/9781492045250/",
        title: "Hands-On Smart Contract Development with Solidity and Ethereum",
        img: "https://learning.oreilly.com/library/cover/9781492045250/200w",
        description: `Ready to dive into smart contract development for the blockchain? With this practical guide, experienced engineers and beginners alike will quickly learn the entire process for building smart contracts for Ethereum—the open source blockchain-based distributed computing platform. You’ll get up to speed with the fundamentals and quickly move into builder mode.

        Kevin Solorio, Randall Kanna, and Dave Hoover show you how to create and test your own smart contract, create a frontend for users to interact with, and more. It’s the perfect resource for people who want to break into the smart contract field but don’t know where to start.
        
        In four parts, this book helps you:
        
        Explore smart contract fundamentals, including the Ethereum protocol, Solidity programming language, and the Ethereum Virtual Machine
        Dive into smart contract development using Solidity and gain experience with Truffle framework tools for deploying and testing your contracts
        Use Web3 to connect your smart contracts to an applicationso users can easily interact with the blockchain
        Examine smart contract security along with free online resources for smart contract security auditing`,
        isbn: "9781492045267",
        authors: "Kevin Solorio, Randall Kanna, David H. Hoover",
        release_date: "December 2019",
        deleted: false,
        stars: 4,
        toc: [
            {
               title: "1. Blockchain Concepts",
               uri: "#",
               level: "1",
               read: false
            }
        ]
    }
]

const getBooks = async () => {
    try {
        const res = await axios.get("http://localhost:8080/books")
        return res.data
        // return mockBooks
    } catch (error) {
        console.error(error)
    }
}

const BookListItem: React.FC<{book: IBookModel }> = ({ book }) => {
    return (
        <Box p="5" maxW="800px" borderRadius="md" mb="6" borderWidth="1px">
            <Flex flexDir="row" gridGap="6" >
                <Image src={book.img} h="200px" w="150px" flexShrink="unset"/>
                <Flex flexDir="column" gridGap="1">
                    <Link href={book.uri} isExternal>
                        <Text fontSize="2xl" color="blue.700" fontWeight="semibold" lineHeight="shorter" justify="center">
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
}

const BookList: React.FC = props => {
    const queryClient = useQueryClient()
    const query = useQuery('books', getBooks)
    console.log(query)
    return (
       <ul style={{ listStyle: "none" }}>
        {/* {!query.data.length && (
            <Text fontSize="2xl" color="blue.700" fontWeight="semibold">Add a book to get started</Text>
        )} */}
        {query.data && query.data.map((book: IBookModel, i: number) => (
            <li key={`key-${i}`}>
                <BookListItem book={book} />
            </li>
        ))}
       </ul>
    )
}

export default BookList