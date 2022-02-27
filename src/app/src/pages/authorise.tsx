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

import React, { useEffect, useState } from 'react';

const { getAllContractAccolades } = require("../lib/getaccs.js");

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { IntegrationCard } from '../components/IntegrationCard'
import { AccoladeCard } from '../components/AccoladeCard'
import { Header } from '../components/Header'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    const [tokens, setTokens] = useState([]);

    useEffect(()=>{
      getAllContractAccolades("0x150fB911DA54B7841c841B0B939D9006C6feDC15").then((response) => {
        setTokens(response)
      })
    }, [])

    function onSubmit(event) {
      event.preventDefault();
      Object.keys(event.target.elements).map(function(key, index) {
        if (event.target.elements[index].type === "checkbox" && event.target.elements[index].checked) {
          console.log(event.target.elements[index].value)
        }
      });
    }

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
          <form onSubmit={onSubmit}>
          <FormControl id="selectingAccolades">
            <FormLabel>Select which of your accolades you would like to import from Spotify</FormLabel>
            <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <VStack spacing={[1, 5]} py={12}>
            {tokens.length ? tokens.map((value, index: number) => (
              <Checkbox value={'pk_' + index.toString()} id={index.toString()} key={index.toString()}>{value.name}</Checkbox>
            )): <p>Loading...</p>}
            </VStack>
            </CheckboxGroup>
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'red.400'}
              color={'white'}
              onClick={() => router.push('/explore')}
              w="full"
              _hover={{
                bg: 'red.500',
              }}>
              Cancel
            </Button>
            <Button
              type="submit"
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button>
          </Stack>
          </form>
        </Stack>
      </Flex>
    );
  }
