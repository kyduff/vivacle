import Head from 'next/head'
import { Text } from '@chakra-ui/react'

import { Container, Hero, Footer } from '../components'

const Index = () => (
  <Container height="100vh">
    <Head>
      <title>Vivacle</title>
      <meta
        name="description"
        content="Real-world achievements. Tokenize your accomplishments and bootstrap a vibrant Web3 identity."
      />
      <link rel="icon" href="/vivacle_favicon.ico" />
    </Head>
    <Hero />
    <Footer />
  </Container>
)

export default Index
