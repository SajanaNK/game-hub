import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Platforms } from '../types/types'
import { HStack, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
    platforms : Platforms[]
}

function PlatformIconsList({platforms} : Props) {

    const iconMap: { [key:string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox : FaXbox,
        nintendo: SiNintendo,
        ios: MdPhoneIphone,
        linux : FaLinux,
        web : BsGlobe,
        mac: FaApple,
        android : FaAndroid
    }


  return (
    <HStack marginY={1}>
        {
            platforms.map((platform) => {
                return <Icon as={iconMap[platform.slug]} color='gray.500' key={platform.slug} />
            })
        }
    </HStack>
  )
}

export default PlatformIconsList