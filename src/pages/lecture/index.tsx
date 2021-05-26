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
    height: '100%',
  },
});

const LecturePage = () => (
  <Container>
    실습페이지
  </Container>
);

export default LecturePage;
