import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import EditorContainer from '#/components/common/editor';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

const DictionaryCreatePage = () => (
  <Container>
    <EditorContainer />
  </Container>
);

export default DictionaryCreatePage;
