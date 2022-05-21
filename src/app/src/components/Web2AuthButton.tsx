import { Button, Center } from "@chakra-ui/react"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export const Web2AuthButton: React.FC = () => {
  const { data: session } = useSession()

  return (
    <Center>
      <Button colorScheme={session ? 'red' : 'black'} type='submit' className="connectButton" _focus={{ outline: 'none'}} variant={'link'} onClick={session ? () => signOut() : () => signIn()} >
        {session ? 'Log out' : 'Log in'}
      </Button>
    </Center>
  )
}
