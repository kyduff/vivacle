import Head from 'next/head'
import {
  Text,
  Wrap,
  WrapItem,
  Heading
} from '@chakra-ui/react'

import { Container, Main, Footer, AccoladeCard } from '../../components'

const Accolades = () => {
  return (
  <Container height="100vh">
    <Head>
      <title>Explore </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Heading>My Accolades</Heading>
    <Text mt={6}>This is what your trophy case could look like if you connected your wallet!</Text>
    <Main>
      {/* <Integrations/> */}
      <Wrap spacing={{ base: 5, lg: 8 }} justify='center'>
          {[1,2,3,4].map( datum => <WrapItem key={datum} >
            <AccoladeCard 
              title={'Kanye West'} 
              companyName={'Spotify'} 
              imageUrl={'https://www.cleveland.com/resizer/-b7j0Y6-FoZ3H4J65hw0Yld08S4=/arc-anglerfish-arc2-prod-advancelocal/public/VESWDMK7QZAMZAH2UIBW3CHRGU.jpg'} 
              companyLogoUrl={'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png'} 
              description={"Top 5% of listeners"}
              categories={[]}
              />
              </WrapItem>)}
      </Wrap>
    </Main>

    <Footer>
      <Text>Courtesy of the best OxHack22 Team ❤️</Text>
    </Footer>
  </Container>
)}

export default Accolades