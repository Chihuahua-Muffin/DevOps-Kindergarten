import React, { useState, useCallback } from 'react';
import { Input, chakra } from '@chakra-ui/react';

const SearchInput = chakra(Input, {
  baseStyle: {
    width: '50vw',
    maxWidth: '400px',
  },
});

const SearchBox = () => {
  const [value, setValue] = useState('');

  const changeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return (
    <SearchInput
      onChange={changeHandler}
      value={value}
    />
  );
};

export default SearchBox;
