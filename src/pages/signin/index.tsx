import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SignInForm from '#/components/signin/SignInForm';
import SignUpLinkButton from '#/components/signin/SignUpLinkButton';
import { CONTENT_WIDTH } from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    display: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: CONTENT_WIDTH,
    height: '89vh',
  },
});

const RoadMapPage = () => (
  <Container>
    <SignInForm />
    <SignUpLinkButton />
  </Container>
);

export default RoadMapPage;
