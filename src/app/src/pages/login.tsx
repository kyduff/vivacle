import { Button, Center, VStack, Text, HStack } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Login() {
  const { data: session } = useSession()

  return (
    <Center>
      <VStack>
        <HStack>
          <Button onClick={() => signIn("spotify")}>
            Spotify Login
          </Button>
          <Button onClick={() => signOut()}>
            Spotify Logout
          </Button>
        </HStack>
        <Button onClick={() => fetch('/api/auth/spotify', { credentials: 'include' })}>
          Ping spotify
        </Button>
        <Text>
          {JSON.stringify(session, null, 2)}
        </Text>
        <HStack>
          <Button onClick={() => signIn("google")}>
            Google Login
          </Button>
          <Button onClick={() => signOut()}>
            Google Logout
          </Button>
        </HStack>
        <Button onClick={() => fetch('/api/auth/google', { credentials: 'include' })}>
          Ping Google
        </Button>
      </VStack>
    </Center>
  )
}