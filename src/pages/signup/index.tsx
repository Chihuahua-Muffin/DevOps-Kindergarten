import {
  chakra,
  Box,
} from '@chakra-ui/react';
import SignUpForm from '#/components/signup/SignUpForm';

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

const SignUpPage = () => {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
