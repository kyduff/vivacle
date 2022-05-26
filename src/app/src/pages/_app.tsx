import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { Nav } from '../components'
import { UserContextProvider } from '../utils/UserContext'
import { SessionProvider } from "next-auth/react"
import { WalletContextProvider } from '../utils/WalletContext'

import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SessionProvider session={session}>
        <WalletContextProvider>
          <UserContextProvider>
            <Nav />
            <Component {...pageProps} />
          </UserContextProvider>
        </WalletContextProvider>
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
