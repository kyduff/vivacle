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
  Heading,
  CheckboxGroup,
  Checkbox,
  VStack
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

const Accolades = () => (
  <Container height="100vh">
    <Head>
      <title>Explore </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
        <UserProfileEdit/>
    </Main>

    <Footer>
      <Text>Courtesy of the best OxHack22 Team ❤️</Text>
    </Footer>
  </Container>
)

export default Accolades

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
  } from '@chakra-ui/react';
  import { CheckCircleIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons';
  
function UserProfileEdit(): JSX.Element {
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Authorise Accolades
          </Heading>
          <Center>
            <HStack spacing={12}>
                <Avatar size="xl" src="/favicon.ico"/>
                <CheckCircleIcon color={'green.500'} boxSize={'2em'}/>
                <Avatar size="xl" src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"/>
            </HStack>
          </Center> 
          <FormControl id="selectingAccolades" isRequired>
            <FormLabel>Select which of your accolades you would like to import from Spotify</FormLabel>
            <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <VStack spacing={[1, 5]} py={12}>
                <Checkbox value='a'>Kanye West - Top 5% Listener</Checkbox>
                <Checkbox value='b'>Tastemaker Award 2021</Checkbox>
                <Checkbox value='c'>Eclectic Ears 2021</Checkbox>
                <Checkbox value='d'>Lex Friend Superfan 2021</Checkbox>
            </VStack>
            </CheckboxGroup>
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }