import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';

import SignUpForm from '#/components/signup/SignUpForm';
import BackArrow from '#/components/common/backArrow';
import {
  CONTENT_WIDTH,
  LOGIN_PAGE_URL,
} from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: CONTENT_WIDTH,
    height: '89vh',
  },
});

const SignUpPage = () => (
  <Container>
    <BackArrow href={LOGIN_PAGE_URL} />
    <SignUpForm />
  </Container>
);

export default SignUpPage;
