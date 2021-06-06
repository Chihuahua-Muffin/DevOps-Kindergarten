import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
});

const DictionaryCreatePage = () => (
  <Container>
    크리에이트 페이지
  </Container>
);

export default DictionaryCreatePage;
