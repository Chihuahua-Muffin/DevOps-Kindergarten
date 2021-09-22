import React from 'react';
import * as Styled from './styled';
import SignUpForm from '#/components/UI/organisms/SignupForm';
import BackArrow from '#/components/UI/atomics/BackArrow';
import { LOGIN_PAGE_URL } from '#/constants';

const SignUpPage = () => (
  <Styled.Container>
    <BackArrow href={LOGIN_PAGE_URL} />
    <SignUpForm />
  </Styled.Container>
);

export default SignUpPage;
