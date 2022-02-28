import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { Nav } from '../components'
import { UserContextProvider } from '../utils/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <UserContextProvider>
        <Nav/>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
