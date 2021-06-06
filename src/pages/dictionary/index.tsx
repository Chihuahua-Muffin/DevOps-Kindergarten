import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SearchBox from '#/components/dictionary/SearchBox';
import CardContainer from '#/components/dictionary/CardContainer';
import CreateButton from '#/components/dictionary/CreateButton';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const DictionaryPage = () => (
  <Container>
    <SearchBox />
    <CardContainer />
    <CreateButton />
  </Container>
);

export default DictionaryPage;
