import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Button } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  return (
    <Button onClick={toggleColorMode}>
      {isLight ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
