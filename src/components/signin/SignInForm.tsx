import React, { useCallback } from 'react';
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
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import useForm from '#/hooks/useForm';
import SignInValidation from '#/components/signin/SignInValidation';
import {
  LOGIN_API_URL,
  TOAST_DURATION,
  TOAST_STATUS_SUCCESS,
  TOAST_STATUS_ERROR,
} from '#/constants';

interface DecodeProps {
  sub: string;
  auth: string;
  exp: number;
}

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

const SignInForm = () => {
  const toast = useToast();
  const onSubmit = useCallback(async (submitValues) => {
    try {
      // 성공 시
      const result = await axios.post(LOGIN_API_URL, {
        username: submitValues.id,
        password: submitValues.password,
      });
      const loginData: DecodeProps = jwtDecode(result.data.token);
      toast({
        title: '로그인 되었습니다!',
        description: `${loginData.sub}님 환영합니다!`,
        status: TOAST_STATUS_SUCCESS,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    } catch (error) {
    // 실패 시
      toast({
        title: '로그인에 실패했습니다!',
        description: '존재하지 않는 회원입니다.',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [toast]);

  const {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues: {
      id: '',
      password: '',
    },
    onSubmit,
    validate: SignInValidation,
  });

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <FormControlContainer isInvalid={errors.id}>
        <FormLabel>아이디</FormLabel>
        <FormInput type="text" className="idInput" name="id" value={values.id} onChange={handleChange} />
        <FormErrorMessage id="idErrorText">{errors.id}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.password}>
        <FormLabel>비밀번호</FormLabel>
        <FormInput id="password" name="password" type="password" value={values.password} onChange={handleChange} />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControlContainer>
      <SubmitButton id="submitButton" type="submit" disabled={isLoading} colorScheme="teal">
        {isLoading ? <Spinner /> : '로그인'}
      </SubmitButton>
    </Container>
  );
};

export default SignInForm;
