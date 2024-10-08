import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


export const NavBar = () => {
  return (
    <HStack padding={'10px'} >
        <Image src={logo} alt='logo' boxSize='60px' />
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}
