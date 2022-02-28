import Head from 'next/head'
import {
  Text,
  Wrap,
  WrapItem,
  Heading
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { ethers } from 'ethers'

import { Container, Main, Footer, AccoladeCard } from '../../components'
import { getAccoladesByContract } from "../../lib/getaccs"
import { signets } from '../../lib/signets.json'
import { abi } from "../../lib/abi.json"

interface AccoladeAPIResponse {
  [key: string]: AccoladeAPIDatum[]
}

export interface AccoladeAPIDatum {
  name: string
  image_url: string
  description: string
}

const Accolades = ({accolades}: {accolades: AccoladeAPIResponse}) => {
  console.log(accolades)
  return (
  <Container height="100vh">
    <Head>
      <title>My Accolades </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Heading>My Accolades</Heading>
    <Main>
      {/* <Integrations/> */}
      <Wrap spacing={{ base: 5, lg: 8 }} justify='center'>
          {["spotify", "oxhack", "redcross", "strava"].map( data => accolades[data].map(
            (datum: AccoladeAPIDatum, idx: number) => <WrapItem key={idx} >
            <AccoladeCard 
              title={datum.name} 
              companyName={data} 
              imageUrl={datum.image_url} 
              description={datum.description}
              categories={[]}
              companyLogoUrl={''} /></WrapItem>))}
      </Wrap>
    </Main>

    <Footer>
      <Text>Courtesy of the best OxHack22 Team ❤️</Text>
    </Footer>
  </Container>
)}

export default Accolades


export const getServerSideProps: GetServerSideProps = async (context) => {

  // return {props: {accolades :{ "spotify": [ { "name": "Lex Fridman Podcast Superfan — 2021", "image_url": "https://raw.githubusercontent.com/mbiss10/oxhack22/main/spotify_achievement_images/lex.png", "description": "The Lex Fridman Podcast was your most listened-to podcast this year!" }, { "name": "Tastemaker", "image_url": "https://raw.githubusercontent.com/mbiss10/oxhack22/main/spotify_achievement_images/taste.png", "description": "You created a playlist that amassed over 20 followers. You must have good taste!" }, { "name": "Eclectic Ears", "image_url": "https://raw.githubusercontent.com/mbiss10/oxhack22/main/spotify_achievement_images/ears.png", "description": "You listened to songs from 15 different genres this year!" } ], "oxhack": [], "redcross": [], "strava": [] }}}
  const provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);

  const address = context.query.accolades!.toString().toLowerCase();
  const accolades = new Object();

  for (const contractAddr in signets) {

    const contract = new ethers.Contract(
      contractAddr,
      abi,
      provider,
    );

    let tokens = await getAccoladesByContract(address, contract);

    if (tokens === null) {
      // @ts-ignore
      console.error(`could not get accolades for ${signets[contractAddr]}`);
      tokens = [];
    }

    // @ts-ignore
    accolades[signets[contractAddr]] = tokens;
  }

  console.log(JSON.stringify(accolades, null, 2))

  return {
    props: {
      accolades,
    }
  }
}