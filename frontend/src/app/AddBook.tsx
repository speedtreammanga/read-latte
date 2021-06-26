import React, { useState } from "react"
import { Button, Flex, Input, Text, Box } from "@chakra-ui/react"
import { FiPlus } from 'react-icons/fi'
import { useMutation, useQueryClient, QueryCache } from "react-query"
import axios from "axios"

// const addNewBook = async (uri: string) => {
//     try {
//         return await 
//         // return {
//         //     uri: "https://learning.oreilly.com/library/view/hands-on-smart-contract/9781492045250/",
//         //     title: "Hands-On Smart Contract Development with Solidity and Ethereum",
//         //     img: "https://learning.oreilly.com/library/cover/9781492045250/200w",
//         //     description: `Ready to dive into smart contract development for the blockchain? With this practical guide, experienced engineers and beginners alike will quickly learn the entire process for building smart contracts for Ethereum—the open source blockchain-based distributed computing platform. You’ll get up to speed with the fundamentals and quickly move into builder mode.
    
//         //     Kevin Solorio, Randall Kanna, and Dave Hoover show you how to create and test your own smart contract, create a frontend for users to interact with, and more. It’s the perfect resource for people who want to break into the smart contract field but don’t know where to start.
            
//         //     In four parts, this book helps you:
            
//         //     Explore smart contract fundamentals, including the Ethereum protocol, Solidity programming language, and the Ethereum Virtual Machine
//         //     Dive into smart contract development using Solidity and gain experience with Truffle framework tools for deploying and testing your contracts
//         //     Use Web3 to connect your smart contracts to an applicationso users can easily interact with the blockchain
//         //     Examine smart contract security along with free online resources for smart contract security auditing`,
//         //     isbn: "9781492045267",
//         //     authors: "Kevin Solorio, Randall Kanna, David H. Hoover",
//         //     release_date: "December 2019",
//         //     deleted: false,
//         //     stars: 4,
//         //     toc: [
//         //         {
//         //            title: "1. Blockchain Concepts",
//         //            uri: "#",
//         //            level: "1",
//         //            read: false
//         //         }
//         //     ]
//         // }
//     } catch (error) {
//         console.error(error)
//     }
// }

const AddBook: React.FC = props => {
    const [uri, setUri] = useState("")
    const queryClient = useQueryClient()

    const mutation = useMutation(() => {
        return axios.post("http://localhost:8080/books", { uri }).then(res => res.data)
    }, {
        onSuccess: (book) => {
            queryClient.invalidateQueries(['books'])
        }
    })


    return (
        <Flex width="full" direction="column" gridGap="2" marginY="10" align="flex-end">
            <Flex gridGap={2} align="center" justify="flex-end">
                <Input
                    onChange={e => setUri(e.target.value)}
                    type="text"
                    placeholder="Paste a Oreilly book link" maxW="500px"
                    minW="350px"
                    disabled={mutation.isLoading}
                />
                <Button
                    onClick={() => mutation.mutate()}
                    leftIcon={<FiPlus/>}
                    backgroundColor="blue.700"
                    colorScheme="blue"
                    w="100px"
                    disabled={mutation.isLoading}
                >
                    Add
                </Button>
            </Flex>
            {mutation.error && (
                <Text color="red.500">
                    {false
                        ? false
                        : "Something went wrong while adding your book"
                    }
                </Text>
            )}
        </Flex>
    )
}

export default AddBook