import {Flex, Box, Spacer, Heading, FlexProps } from "@chakra-ui/react"
import {ethers} from 'ethers';
import { ConnectWalletButton } from "./ConnectWalletButton";

export const Header = (props: FlexProps) => (
    <Flex as="header" align='center'>
        <Box p='2'>
            <Heading size='xl'>{props.title}</Heading>
        </Box>
        <Spacer />
        <Box>
            {/* <ConnectWalletButton /> */}
        </Box>
    </Flex>
)