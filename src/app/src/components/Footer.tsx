import { Flex, FlexProps, Text } from '@chakra-ui/react'

export const Footer = ({ text }) => (
  <Flex as="footer" py="8rem">
    <Text>{text}</Text>
  </Flex>
)

Footer.defaultProps = {
  text: 'Built in Oxford ❤️',
}
