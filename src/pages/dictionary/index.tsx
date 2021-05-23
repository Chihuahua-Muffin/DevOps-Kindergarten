import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SearchBox from '#/components/dictionary/SearchBox';
import CardContainer from '#/components/dictionary/CardContainer';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const RoadMapPage = () => (
  <Container>
    <SearchBox />
    <CardContainer />
  </Container>
);

export default RoadMapPage;
