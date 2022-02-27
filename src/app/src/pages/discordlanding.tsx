import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { VStack, Image, Button } from "@chakra-ui/react";
import Head from 'next/head'


export default function DiscordLanding() {

  const router = useRouter();
  const { code } = router.query;

  const [isDisabled, setDisabled] = useState(false)

  const {user, setUser} = useContext(UserContext);

  const [verified, setVerified] = useState(false);

  const handleTok = async () => {
    try {

      console.log(code);
      console.log(verified);

      if (!code || verified) {
        return;
      }

      const oauthResp = await fetch('/api/discordauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      const { oAuthVerified } = await oauthResp.json();

      console.log(oAuthVerified);
      setVerified(oAuthVerified);

    } catch (error) {
      console.error(error);
    }


  }

  useEffect(() => {
    (async () => {
      await handleTok();
    })();
  }, [code]);

  async function handleClaim() {

    if (!verified) {
      console.error('not verified');
    }

    const tokenId = 0;
    const contractAddress = '0x47a2f25ad83Efa1BaA376D062284e777dD223463';
   

    console.log(user)
    const body = JSON.stringify({ address: user.address, contractAddress, tokenId });
    console.log(body);
    try {
      var res = await fetch('/api/mint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
    } catch (error) {
      console.error(error);
      return;
    }

    if (res.status == 200) {
      setDisabled(true)
    } else {
      console.error('error minting token');
    }
  }


  return (
    <Container height="100vh">
    <Head>
      <title>Claim your OxHack NFT </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <VStack>
      <Image
            objectFit={'cover'}
            width={'100%'}
            maxW={'400px'}
            src={
              'https://cdn.discordapp.com/attachments/945665299938697260/947382707309137980/OxHack.png'
            }
          />
      <Button
        bg={isDisabled ? 'blue.400': 'green.400'}
        color={'white'}
        m={'em !important'}
        _hover={{
          bg: 'blue.500',
        }}
        onClick={handleClaim}
        isDisabled={isDisabled}
        >
        {isDisabled ? 'Congrats, your NFT is being claimed!': 'Claim OxHack NFT'}
      </Button>
      {isDisabled &&
      <Button
        as={'a'}
        bg={'blue.400'}
        color={'white'}
        mt={'2em !important'}
        _hover={{
          bg: 'blue.500',
        }}
        href="/explore"
        >
        Return to the Explore page
      </Button>
      }
      </VStack>
    </Main>
    </Container>
  )
}