import {Button, Box, Text, Center } from "@chakra-ui/react"
import {ethers} from 'ethers';
import React, { useState, useContext } from "react";
import { getAddress } from "../utils/metamask";
import { UserContext } from "../utils/UserContext";

export const ConnectWalletButton: React.FC = () => {
    //@ts-ignore
    const { user, setUser } = useContext(UserContext);

    // return <>
    return (
        <Center>
        <Button colorScheme='teal' type='submit' className="connectButton" onClick={async () => await getAddress()} >
            {user.address? 'Wallet Connected': 'Connect Wallet'}
        </Button>
        </Center>
    )
}