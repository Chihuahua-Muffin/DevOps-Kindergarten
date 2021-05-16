import { useState, useEffect } from 'react';
import {
  chakra,
  Box,
  Input,
  Button,
  Spinner,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import useForm from '#/hooks/useForm';
import SignUpValidation from '#/components/signup/SignUpValidation';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    rowGap: '50px',
  },
});

const FormControlContainer = chakra(FormControl, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const FormInput = chakra(Input, {
  baseStyle: {
    width: '100%',
  },
});

const SubmitButton = chakra(Button, {
  baseStyle: {
    width: '200px',
    height: '50px',
  },
});

const SignUpForm = () => {
  const toast = useToast();
  const {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit, 
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      id: '',
      password: '',
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 2000));
      toast({
        title: `회원가입 되었습니다!`,
        description: `${values.name}님 환영합니다!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    validate: SignUpValidation,
  });

  return (
    <Container as='form' onSubmit={handleSubmit}>
      <FormControlContainer isInvalid={errors.name}>
        <FormLabel>이름</FormLabel>
        <FormInput name='name' value={values.name} onChange={handleChange} />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.email}>
        <FormLabel>이메일</FormLabel>
        <FormInput name='email' type='email' value={values.email} onChange={handleChange} />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.id}>
        <FormLabel>아이디</FormLabel>
        <FormInput name='id' value={values.id} onChange={handleChange} />
        <FormErrorMessage>{errors.id}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.password}>
        <FormLabel>비밀번호</FormLabel>
        <FormInput name='password' type='password' value={values.password} onChange={handleChange} />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControlContainer>
      <SubmitButton type='submit' disabled={isLoading} colorScheme='red'>
        {isLoading ? <Spinner /> : '회원가입'}
      </SubmitButton>
    </Container>
  );
};

export default SignUpForm;
