import React, { useState } from "react"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { FiPlus } from 'react-icons/fi'
import { useMutation, useQueryClient } from "react-query"
import axios from "axios"

const AddBook: React.FC = props => {
    const [uri, setUri] = useState("")
    const queryClient = useQueryClient()

    const mutation = useMutation(
        () => axios.post("http://localhost:8080/books", { uri }).then(res => res.data)
        ,{
            onSuccess: (book) => {
                queryClient.invalidateQueries(['books'])
                setUri("")
            }
        }
    )

    return (
        <Flex width="full" direction="column" gridGap="2" marginY="10" align="flex-end">
            <Flex gridGap={2} align="center" justify="flex-end">
                <Input
                    onChange={e => setUri(e.target.value)}
                    type="text"
                    placeholder="Paste a Oreilly book link" maxW="500px"
                    minW="350px"
                    disabled={mutation.isLoading}
                    value={uri}
                />
                <Button
                    onClick={() => mutation.mutate()}
                    leftIcon={<FiPlus/>}
                    backgroundColor="blue.700"
                    colorScheme="blue"
                    w="100px"
                    disabled={mutation.isLoading}
                    isLoading={mutation.isLoading}
                    loadingText={"Adding"}
                >
                    Add
                </Button>
            </Flex>
            {mutation.error && (
                <Text color="red.500">
                    Something went wrong while adding your book
                </Text>
            )}
        </Flex>
    )
}

export default AddBook