import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  HStack,
  Image
} from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';

export const Nav = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} px={8} py={2}>
        <Flex as="header" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Image
              height={'48px'}
              width={'48px'}
              objectFit={'cover'}
              src={'/favicon.ico'}
              alt={'logo'}
            />
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <DarkModeSwitch />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
