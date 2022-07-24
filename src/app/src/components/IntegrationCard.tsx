import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

export interface IntegrationProps {
  companyName: string
  logoUrl: string
  categories: string[]
  description: string
  bgColor: string
  active: boolean
  secondaryHref?: string
  secondaryName?: string
}

export const IntegrationCard: React.FC<IntegrationProps> = ({
  companyName,
  logoUrl,
  categories,
  description,
  bgColor,
  active,
  secondaryHref,
  secondaryName,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const localUrl = '/portal?brand=' + secondaryName

  return (
    <Center py={6}>
      <Box
        as={active ? 'button' : null}
        minW={'300px'}
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.600')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        onClick={active ? onOpen : null}
      >
        <Box bg={bgColor} pt={6} px={6} pb={4}>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <Avatar src={logoUrl} name={'logo'} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text
                fontSize={'xl'}
                fontWeight={600}
                color={useColorModeValue('gray.800', 'gray.800')}
              >
                {companyName}
              </Text>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {categories.filter((c) => c.toLowerCase() !== 'all').join(', ')}
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Stack mt={4} px={6} pb={6}>
          <Text color={useColorModeValue('gray.500', 'white')}>
            {description}
          </Text>
        </Stack>
        {!active && (
          <Box bg="darkgray" pt={4} pb={4}>
            <Text
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              color="white"
              align={'center'}
            >
              Coming Soon!
            </Text>
          </Box>
        )}
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{companyName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              as={'a'}
              colorScheme="blue"
              onClick={() =>
                signIn(secondaryName, {
                  callbackUrl: `${secondaryHref ? secondaryHref : localUrl}`,
                })
              }
            >
              Login to claim your accolades
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  )
}

IntegrationCard.defaultProps = {
  companyName: 'Duolingo',
  logoUrl: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
  categories: ['Learning'],
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\
  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\
  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\
  et ea rebum.',
  bgColor: 'blue.100',
}
