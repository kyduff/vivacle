import Head from 'next/head'
import { Text, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Container, Main, Footer } from '../components'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { AccoladeCard } from '../components'
// import { useSession, signIn, signOut } from "next-auth/react";

function Accolades() {
  const router = useRouter()
  const brand: string = router.query.brand ? router.query.brand.toString() : ''

  const [dataElements, setDataElements] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/spotify/accolades', {
        method: 'GET',
      })
      const json = await data.json()
      // console.log('data: ', json)
      setDataElements(json.data.items)
    }
    fetchData().catch(console.error)
  }, [])

  return (
    <Container height="100vh">
      <Head>
        <title>
          {brand !== ''
            ? `${_.startCase(_.toLower(brand))} Accolades`
            : 'Accolades'}{' '}
        </title>
        <link rel="icon" href="/vivacle_favicon.ico" />
      </Head>
      <Main>
        <Flex align={'center'} justify={'center'}>
          {dataElements && (
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              spacing={{ base: 5, lg: 8 }}
            >
              {dataElements.map((o) => (
                <AccoladeCard
                  key={o.id}
                  title={o.name}
                  companyName="Spotify"
                  imageUrl={o.images[0].url}
                  categories={[]}
                  description="Top Listener"
                  companyLogoUrl="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                />
              ))}
            </SimpleGrid>
          )}
        </Flex>
      </Main>
      <Footer>
        <Text>Courtesy of the best OxHack22 Team ❤️</Text>
      </Footer>
    </Container>
  )
}

export default Accolades

// function UserProfileEdit(): JSX.Element {
//   const [minting, setMinting] = useState([]);
//   const [tokens, setTokens] = useState([]);
//   const [unclaimedTokensState, setUnclaimedTokensState] = useState([]);
//   const [isDisabled, setIsDisabled] = useState<boolean>(false);
//   const { user } = useContext(UserContext)

//   return (
//     <Flex
//       align={'center'}
//       justify={'center'}>
//             <Button as={'a'} colorScheme='blue' onClick={async () => {console.log("hi")}}> Login to claim your accolades</Button>
//     </Flex>
//   );
// }

// const brands = {
//   "premierleague": "https://s3.amazonaws.com/premierleague-static-files/premierleague/pl_icon.png",
//   "nba": "http://nbahoopsonline.com/Articles/2016-17/nbaaplogo.jpg",
//   "oxdack2022": "https://oxfordhack22.co.uk/logo512.png",
//   "spotify": "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png",
//   "netflix": "https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png",
//   "audible": "https://pbs.twimg.com/profile_images/1098979859446095873/TbBByTY3_400x400.png",
//   "duolingo": "https://www.duolingo.com/images/facebook/duo200.png",
//   "coursera": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png",
//   "udacity": "https://media.glassdoor.com/sqll/659776/udacity-squarelogo-1458083545831.png",
//   "chainshot": "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ChainShot_Logo/original.png?1615842691",
//   "mapmyrun": "https://blog.mapmyrun.com/wp-content/uploads/2020/04/RUN-AppIcon.png",
//   "strava": "https://icon-library.com/images/strava-icon/strava-icon-10.jpg",
//   "fitbit": "https://media.glassdoor.com/sqll/500145/fitbit-squarelogo-1452064129606.png",
//   "applefitness": "https://www.iphonejd.com/.a/6a010535fde333970c026be43261f5200d-pi",
//   "peloton": "https://play-lh.googleusercontent.com/wNmoGX3LqZUzZeCtvTm3jSAcwrvt9wRnjo5CYydSkiQOBf5IDNB8ndBkpRLVU6xpggX3",
//   "alltrails": "https://media.glassdoor.com/sqll/2311916/alltrails-squarelogo-1539895815445.png"
// }

// interface ObjectMap {
//   [name: string]: string
// }
