import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms';
import { Platforms } from '../types/types';
import usePlatform from '../hooks/usePlatform';

interface Props {
    onPlatformSelected: (platform: Platforms) => void
    selectedPlatformId? : number
}

function PlatformSelector({onPlatformSelected, selectedPlatformId}:Props) {

    
    const {data,error} = usePlatforms();
    const platform = usePlatform(selectedPlatformId);

    if(error){
        return null
    }

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} > {platform ? platform?.name :' Platform Selector'}</MenuButton>
        <MenuList>
           {
            data?.results.map((platform) => (
                <MenuItem onClick={() => {onPlatformSelected(platform)}} key={platform.id} >{platform.name}</MenuItem>
            ))
           }
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector