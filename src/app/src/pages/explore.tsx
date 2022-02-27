import Head from 'next/head'
import {
  Link as ChakraLink,
  Text,
  Tabs,
  TabList, 
  TabPanels,
  TabPanel,
  Tab,
  SimpleGrid,
  Wrap,
  WrapItem,
  Center,
  Heading
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { IntegrationCard, IntegrationProps } from '../components/IntegrationCard'

interface TabData {
    label: string,
    content: string
}

function Integrations() {
    // 1. Create the component
    const DataTabs: React.FC<{data: TabData[]}> = ({ data }) => {
      return (
        <Tabs isFitted>
          <TabList>
            {data.map((tab, index: number) => (
              <Tab key={index}>{tab.label}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((tab, index: number) => (
              <TabPanel p={4} key={index}>
                {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}> */}
                <Wrap spacing={{ base: 5, lg: 8 }} justify='center'>
                    {defaultData.filter(x => x.categories.includes(tab.content)).map( datum => <WrapItem><IntegrationCard {...datum}/></WrapItem>)}
                </Wrap>
                {/* </SimpleGrid> */}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )
    }
  
    // 2. Create an array of data
    const tabData: TabData[] = [
      {
        label: 'All',
        content: 'all',
      },
      {
        label: 'Learning',
        content:
          'Learning'
      },
      {
        label: 'Health',
        content:
          'Health'
      },
      {
        label: 'Events',
        content:
          'Events'
      },
      {
        label: 'Media',
        content:
          'Media'
      },
    ]
  
    // 3. Pass the props and chill!
    return <DataTabs data={tabData} />
  }

const Explore = () => (
  <Container height="100vh">
    <Head>
      <title>Explore </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Heading>Explore available integrations</Heading>

    <Main>
      <Integrations/>
    </Main>

    <Footer>
      <Text>Courtesy of the best OxHack22 Team ❤️</Text>
    </Footer>
  </Container>
)

export default Explore

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\
erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\
et ea rebum.'

const defaultData: IntegrationProps[] = [
  {
    companyName: 'Premier League',
    categories: ['all', 'Events'],
    logoUrl: 'https://s3.amazonaws.com/premierleague-static-files/premierleague/pl_icon.png',
    description: LOREM_IPSUM,
    bgColor: 'green.100'
  },
  {
    companyName: 'NBA',
    categories: ['all', 'Events'],
    logoUrl: 'http://nbahoopsonline.com/Articles/2016-17/nbaaplogo.jpg',
    description: LOREM_IPSUM,
    bgColor: 'red.100'
  },
  {
    companyName: 'OxHack2022',
    categories: ['all', 'Events'],
    logoUrl: 'https://oxfordhack22.co.uk/logo512.png', 
    description: LOREM_IPSUM,
    bgColor: 'gray.100'
  },
  {
    companyName: 'Spotify',
    categories: ['all', 'Media'],
    logoUrl: 'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png',
    description: LOREM_IPSUM,
    bgColor: 'green.100'
  },
  {
    companyName: 'Netflix',
    categories: ['all', 'Media'],
    logoUrl: 'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png',
    description: LOREM_IPSUM,
    bgColor: 'red.100'
  },
  {
    companyName: 'Audible',
    categories: ['all', 'Media'],
    logoUrl: 'https://pbs.twimg.com/profile_images/1098979859446095873/TbBByTY3_400x400.png',
    description: LOREM_IPSUM,
    bgColor: 'gray.100'
  },
  {
    companyName: 'Duolingo',
    categories: ['all', 'Learning'],
    logoUrl: 'https://www.duolingo.com/images/facebook/duo200.png',
    description: LOREM_IPSUM,
    bgColor: 'green.100'
  },
  {
    companyName: 'Coursera',
    categories: ['all', 'Learning'],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png',
    description: LOREM_IPSUM,
    bgColor: 'blue.100'
  },
  {
    companyName: 'Udacity',
    categories: ['all', 'Learning'],
    logoUrl: 'https://media.glassdoor.com/sqll/659776/udacity-squarelogo-1458083545831.png',
    description: LOREM_IPSUM,
    bgColor: 'blue.100'
  },
  {
    companyName: 'Chainshot',
    categories: ['all', 'Learning'],
    logoUrl: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/ChainShot_Logo/original.png?1615842691',
    description: LOREM_IPSUM,
    bgColor: 'orange.100'
  },
  {
    companyName: 'MapMyRun',
    categories: ['all', 'Health'],
    logoUrl: 'https://blog.mapmyrun.com/wp-content/uploads/2020/04/RUN-AppIcon.png',
    description: LOREM_IPSUM,
    bgColor: 'blue.100'
  },
  {
    companyName: 'Strava',
    categories: ['all', 'Health'],
    logoUrl: 'https://icon-library.com/images/strava-icon/strava-icon-10.jpg',
    description: LOREM_IPSUM,
    bgColor: 'orange.100'
  },
  {
    companyName: 'Fitbit',
    categories: ['all', 'Health'],
    logoUrl: 'https://media.glassdoor.com/sqll/500145/fitbit-squarelogo-1452064129606.png',
    description: LOREM_IPSUM,
    bgColor: 'green.100'
  },
  {
    companyName: 'Apple Fitness',
    categories: ['all', 'Health'],
    logoUrl: 'https://www.iphonejd.com/.a/6a010535fde333970c026be43261f5200d-pi',
    description: LOREM_IPSUM,
    bgColor: 'white.100'
  },
  {
    companyName: 'Peloton',
    categories: ['all', 'Health'],
    logoUrl: 'https://play-lh.googleusercontent.com/wNmoGX3LqZUzZeCtvTm3jSAcwrvt9wRnjo5CYydSkiQOBf5IDNB8ndBkpRLVU6xpggX3',
    description: LOREM_IPSUM,
    bgColor: 'red.100'
  },
  {
    companyName: 'All Trails',
    categories: ['all', 'Health'],
    logoUrl: 'https://media.glassdoor.com/sqll/2311916/alltrails-squarelogo-1539895815445.png',
    description: LOREM_IPSUM,
    bgColor: 'green.100'
  },
]