import { Button, Center, Image } from "@chakra-ui/react"
import React, { useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserContext } from "../utils/UserContext";

export const Web2AuthButton: React.FC = () => {
  const { data: session } = useSession()

  return (
    <Center>
      <Button colorScheme={session ? 'red' : 'black'} type='submit' className="connectButton" variant={'link'} onClick={session ? () => signOut() : () => signIn()} >
        {session ? 'Log out' : 'Log in'}
      </Button>
    </Center>
  )
}
