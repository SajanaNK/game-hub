import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import gameQueryStore from '../store';

function SortSelector() {

  const setSortOrder =  gameQueryStore(s => s.setSortOrder);
  const selectedSortOrder =  gameQueryStore(s => s.gameQuery.sortOrder);


    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: 'metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]

    const currentSortOrder = sortOrders.find((order) => order.value === selectedSortOrder);

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />} > Order By: {currentSortOrder?.label || 'Relevance'}</MenuButton>
    <MenuList>
       {
        sortOrders.map((sortOrder) => (
            <MenuItem key={sortOrder.value} onClick={()=> {setSortOrder(sortOrder.value)}} >{sortOrder.label}</MenuItem>
        ))
       }
    </MenuList>
</Menu>
  )
}

export default SortSelector