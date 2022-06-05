import Head from 'next/head'
import { Text } from '@chakra-ui/react'

import { Container, Hero, Footer } from '../components'

const Index = () => (
  <Container>
    <Head>
      <title>Vivacle</title>
      <meta name="description" content="Own your life" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <Footer>
      <Text>Made in Oxford ❤️</Text>
    </Footer>
  </Container>
)

export default Index
