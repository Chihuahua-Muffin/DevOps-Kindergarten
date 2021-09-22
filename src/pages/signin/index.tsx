import React from 'react';
import { chakra, Box } from '@chakra-ui/react';
import SignInForm from '#/components/UI/organisms/SigninForm';
import SignUpLinkButton from '#/components/UI/molecules/SingupLinkButton';
import { CONTENT_WIDTH } from '#/constants';

export const Container = chakra(Box, {
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
