import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

export interface AccoladeProps {
  title: string
  companyName: string
  imageUrl: string
  categories: string[]
  description: string
  companyLogoUrl: string
}

export const AccoladeCard: React.FC<AccoladeProps> = ({
  title,
  imageUrl,
  categories,
  description,
  companyName,
  companyLogoUrl,
}) => {
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
        overflow={'hidden'}
      >
        <Box
          minH={'445px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={4}
          pos={'relative'}
        >
          <Image
            objectFit={'cover'}
            src={imageUrl}
            layout={'fill'}
            alt={'accolade image'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {categories}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={companyLogoUrl} name={`Author - ${companyName}`} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{companyName}</Text>
            <Text color={'gray.500'}>Issued on __</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}
