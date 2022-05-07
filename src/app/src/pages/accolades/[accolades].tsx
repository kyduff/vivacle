import Head from 'next/head'
import {
  Text,
  Wrap,
  WrapItem,
  Heading,
  VStack,
  Spinner
} from '@chakra-ui/react'

import { Container, Main, Footer, AccoladeCard } from '../../components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface AccoladeAPIResponse {
  [key: string]: AccoladeAPIDatum[]
}

export interface AccoladeAPIDatum {
  name: string
  image_url: string
  description: string
}

// const Accolades = ({ accolades }: { accolades: AccoladeAPIResponse }) => {
const Accolades = () => {

  const router = useRouter();

  const [accolades1, setAccolades1] = useState<AccoladeAPIResponse>({});
  const [loaded, setLoaded] = useState<boolean>(false);

  const { accolades: address } = router.query;

  useEffect(() => {
    console.log(`address ${address}`)
    if (address === undefined) {
      return;
    }

    async function fetchData() {
      const res = await fetch('/api/fetchaccs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address })
      })

      res.json()
        .then(({ accolades }) => {
          setAccolades1(accolades)
          setLoaded(true);
        })
        .catch(console.error)
    }
    fetchData();
  }, [address])

  console.log(loaded)

  return (
    <Container height="100vh">
      <Head>
        <title>My Accolades </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>My Accolades</Heading>
      <Main>
        {/* <Integrations/> */}
        {!loaded ? (
          <VStack>
            <Text fontSize='lg'>Loading</Text>
            <br />
            <Spinner size='xl' />
          </VStack>
        ) : (
          <Wrap spacing={{ base: 5, lg: 8 }} justify='center'>
            {["spotify", "oxhack", "redcross", "strava"].map(data => accolades1[data].map(
              (datum: AccoladeAPIDatum, idx: number) => <WrapItem key={idx} >
                <AccoladeCard
                  title={datum.name}
                  companyName={data}
                  imageUrl={datum.image_url}
                  description={datum.description}
                  categories={[]}
                  companyLogoUrl={''} /></WrapItem>))}
          </Wrap>
        )
        }
      </Main>

      <Footer>
        <Text>Courtesy of the best OxHack22 Team ❤️</Text>
      </Footer>
    </Container >
  )
}

export default Accolades
