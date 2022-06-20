import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

export default function HeroContent({ title, description }: { title: string, description:string }) {
  return (
    <>
      <Container maxW={'6xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 12, md: 12 }}>
          <Heading
            fontWeight={600}
            fontSize={'5xl'}
            lineHeight={'110%'}>
            Welcome to
             <Text as={'span'} color={'green.400'}>
              {" " + title}
             </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={"lg"}>
            {description}
          </Text>
        </Stack>
      </Container>
    </>
  );
}
