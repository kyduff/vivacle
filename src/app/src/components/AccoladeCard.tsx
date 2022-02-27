import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export const AccoladeCard: React.FC = () => {
  return (
    <Center py={6}>
      <Box
        minW={'300px'}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            objectFit={'cover'}
            width={'100%'}
            src={
              'https://www.cleveland.com/resizer/-b7j0Y6-FoZ3H4J65hw0Yld08S4=/arc-anglerfish-arc2-prod-advancelocal/public/VESWDMK7QZAMZAH2UIBW3CHRGU.jpg'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Media
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            Kanye West
          </Heading>
          <Text color={'gray.500'}>
            Top 5% of listeners
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png'}
            // @ts-ignore
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Spotify - 0xa52j</Text>
            <Text color={'gray.500'}>Issued on Feb 26, 2022</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}