import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch: (searchTerm: string) => void
}

export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding={'10px'} >
        <Image src={logo} alt='logo' boxSize='60px' />
        <SearchInput
          onSearch={onSearch}
        ></SearchInput>
        <ColorModeSwitch />
    </HStack>
  )
}
