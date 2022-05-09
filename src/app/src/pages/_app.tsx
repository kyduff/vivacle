import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { Nav } from '../components'
import { UserContextProvider } from '../utils/UserContext'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SessionProvider session={session}>
        <UserContextProvider>
            <Nav/>
            <Component {...pageProps} />
        </UserContextProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
