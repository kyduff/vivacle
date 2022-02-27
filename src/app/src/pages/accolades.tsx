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
  Heading
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { IntegrationCard } from '../components/IntegrationCard'
import { AccoladeCard } from '../components/AccoladeCard'
import { Header } from '../components/Header'

interface TabData {
    label: string,
    content: string
}

// function Integrations() {
//     // 1. Create the component
//     const DataTabs: React.FC<{data: TabData[]}> = ({ data }) => {
//       return (
//         <Tabs isFitted>
//           <TabList>
//             {data.map((tab, index: number) => (
//               <Tab key={index}>{tab.label}</Tab>
//             ))}
//           </TabList>
//           <TabPanels>
//             {data.map((tab, index: number) => (
//               <TabPanel p={4} key={index}>
//                 <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
//                     {[1,2,3,4].map( x => <IntegrationCard/>)}
//                 </SimpleGrid>
//               </TabPanel>
//             ))}
//           </TabPanels>
//         </Tabs>
//       )
//     }
  
//     // 2. Create an array of data
//     const tabData: TabData[] = [
//       {
//         label: 'Nigerian Jollof',
//         content: 'Perhaps the greatest dish ever invented.',
//       },
//       {
//         label: 'Pounded Yam & Egusi',
//         content:
//           'Perhaps the surest dish ever invented but fills the stomach more than rice.',
//       },
//     ]
  
//     // 3. Pass the props and chill!
//     return <DataTabs data={tabData} />
//   }

const Accolades = () => (
  <Container height="100vh">
    <Head>
      <title>Explore </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Heading>My Accolades</Heading>
    <Main>
      {/* <Integrations/> */}
      <Wrap spacing={{ base: 5, lg: 8 }} justify='center'>
          {[1,2,3,4].map( datum => <WrapItem key={datum} ><AccoladeCard /></WrapItem>)}
      </Wrap>
    </Main>

    <Footer>
      <Text>Courtesy of the best OxHack22 Team ❤️</Text>
    </Footer>
  </Container>
)

export default Accolades
