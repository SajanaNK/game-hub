import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import gameQueryStore from "../store";


function SearchInput() {

   const ref = useRef<HTMLInputElement>(null)
   const setSearch =  gameQueryStore(s => s.setSearch);

  return (
    <form
    
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
            ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
