import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import { Nav } from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Nav/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
