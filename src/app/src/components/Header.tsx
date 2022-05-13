import {Flex, Box, Heading, FlexProps } from "@chakra-ui/react"

export const Header = (props: FlexProps) => (
    <Flex as="header" align='center'>
        <Box p='2'>
            <Heading size='xl'>{props.title}</Heading>
        </Box>
    </Flex>
)
