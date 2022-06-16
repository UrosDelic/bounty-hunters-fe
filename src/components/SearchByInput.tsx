import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useSearchParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';

function SearchByInput() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [inputValue, setInputValue] = useState('');

  function handleSearchParams(e: FormEvent) {
    e.preventDefault();
    const search = inputValue.trim();
    if (search) {
      searchParams.set('search', search);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  }

  return (
    <form onSubmit={handleSearchParams}>
      <InputGroup maxWidth="400px">
        <InputLeftElement children={<SearchIcon />} />
        <Input
          variant="flushed"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          focusBorderColor="main.violet"
          placeholder="Search here..."
        />
      </InputGroup>
    </form>
  );
}

export default SearchByInput;
