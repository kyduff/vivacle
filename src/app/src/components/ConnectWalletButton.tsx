import {Button, Center, Image } from "@chakra-ui/react"
import React, { useContext } from "react";
import { getAddress } from "../utils/metamask";
import { UserContext } from "../utils/UserContext";


export const ConnectWalletButton: React.FC = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <Center>
        <Button colorScheme={user.address? 'orange': 'teal'} type='submit' className="connectButton" onClick={user.address ? undefined : async () => setUser({ address: await getAddress() })} >
            {user.address ? user.address.slice(0,5) + '...' + user.address.slice(-4): 'Connect Wallet'}
        </Button>
        </Center>
    )
}
