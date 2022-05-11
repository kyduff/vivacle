import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Stack,
    HStack,
    Image
  } from '@chakra-ui/react';
import { ConnectWalletButton } from "./ConnectWalletButton"
import { Web2AuthButton } from "./Web2AuthButton"
import { DarkModeSwitch } from './DarkModeSwitch';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';

const NavLink: React.FC<{to: string}> = ({ to, children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={to}>
    {children}
  </Link>
);

export const Nav = () => {
  const {user} = useContext(UserContext)
  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
        <Flex as="header" h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
              <Image
                    height={'48px'}
                    width={'48px'}
                    objectFit={'cover'}
                    src={'/favicon.ico'}
                    alt={'logo'}
                  />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <NavLink key='Explore' to='/explore'>Explore</NavLink>
                <NavLink key='Accolades' to={user.address? `/accolades/${user.address}` : '/accolades'}>My Trophy Case</NavLink>

            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Web2AuthButton />
              <ConnectWalletButton />
              <DarkModeSwitch/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
