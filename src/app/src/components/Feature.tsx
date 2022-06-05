import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

interface FeatureProps{
    titleOne: string;
    textOne: string;
    titleTwo: string;
    textTwo: string;
}

export default function Feature(props: FeatureProps) {
  return (
    <>
    <Container maxW={'5xl'} py={12} my={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading color={'red.500'}>{props.titleOne}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {props.textOne}
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'lg'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/devpost/image/fetch/s--3mm8cs19--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://cdn.discordapp.com/attachments/947392792697667604/947451030696767498/Screen_Shot_2022-02-27_at_11.11.34_AM.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    <Container maxW={'5xl'} py={12} my={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={'lg'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/devpost/image/fetch/s--rv-a2GZ3--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://cdn.discordapp.com/attachments/947392792697667604/947440965549969408/accolades.png'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading color={'blue.500'}>{props.titleTwo}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {props.textTwo}
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
    </>
  );
}
