import React from 'react';
import { chakra, Box } from '@chakra-ui/react';
import SignUpForm from '#/components/UI/organisms/SignupForm';
import BackArrow from '#/components/UI/atomics/BackArrow';
import { LOGIN_PAGE_URL, CONTENT_WIDTH } from '#/constants';

<<<<<<< HEAD
import SignUpForm from '#/components/signup/SignUpForm';
import BackArrow from '#/components/common/backArrow';
import {
  CONTENT_WIDTH,
  LOGIN_PAGE_URL,
} from '#/constants';

const Container = chakra(Box, {
=======
export const Container = chakra(Box, {
>>>>>>> parent of dc475a7 (TableOfContents 생성 & 댓글 생성 폼 생성 & 이론 페이지 Tool 컴포넌트 생성 (#68))
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
