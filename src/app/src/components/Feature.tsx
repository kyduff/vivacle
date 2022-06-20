import {
  Container,
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
    <Container maxW={'6xl'} py={{ base: 4, md: 10 }} my={1}>
      <div className="flex flex-col md:flex-row">
        <Stack className="basis-1/2 mx-5 my-5 md:my-1">
          <Heading color={'red.500'}>{props.titleOne}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {props.textOne}
          </Text>
        </Stack>
        <Flex className="basis-1/2 mx-5 my-5 md:my-1">
          <Image
            rounded={'lg'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/devpost/image/fetch/s--3mm8cs19--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://cdn.discordapp.com/attachments/947392792697667604/947451030696767498/Screen_Shot_2022-02-27_at_11.11.34_AM.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </div>
    </Container>
    <Container maxW={'6xl'} py={{ base: 4, md: 20 }} my={1}>
      <div className="flex flex-col-reverse md:flex-row">
        <Flex  className="basis-1/2 mx-8 my-5 md:my-1">
          <Image
            rounded={'lg'}
            alt={'feature image'}
            src={
              'https://res.cloudinary.com/devpost/image/fetch/s--rv-a2GZ3--/c_limit,f_auto,fl_lossy,q_auto:eco,w_900/https://cdn.discordapp.com/attachments/947392792697667604/947440965549969408/accolades.png'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4} className="basis-1/2 mx-8 my-5 md:my-1">
          <Heading color={'blue.500'}>{props.titleTwo}</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            {props.textTwo}
          </Text>
        </Stack>
      </div>
    </Container>
    </>
  );
}
