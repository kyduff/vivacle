import {Button, Center, Image } from "@chakra-ui/react"
import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Web2AuthButton: React.FC = () => {
    const { data: session } = useSession()
    return (
        <Center>
        <Button colorScheme={session ? 'red': 'green'} type='submit' className="connectButton" onClick={session ? () => signOut() : () => signIn()} >
            {session ? 'Log out': 'Log in'}
        </Button>
        </Center>
    )
}
