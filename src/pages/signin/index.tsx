import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SignInForm from '#/components/signin/SignInForm';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '600px',
    height: '89vh',
  },
});

const RoadMapPage = () => (
  <Container>
    <SignInForm />
  </Container>
);

export default RoadMapPage;
