import React from 'react';
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
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';

import useForm from '#/hooks/useForm';
import SignUpValidation from '#/components/signup/SignUpValidation';

import {
  ICON_STYLE,
} from '#/constants';

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
    width: '100%',
    height: '50px',
    borderRadius: '10px',
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
    onSubmit: async (submitValues) => {
      await new Promise((r) => setTimeout(r, 2000));
      toast({
        title: '회원가입 되었습니다!',
        description: `${submitValues.name}님 환영합니다!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    validate: SignUpValidation,
  });

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <FormControlContainer isInvalid={errors.name}>
        <FormLabel>
          <PermIdentityIcon style={ICON_STYLE} />
          이름
        </FormLabel>
        <FormInput id="name" name="name" value={values.name} onChange={handleChange} />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.email}>
        <FormLabel>
          <EmailIcon style={ICON_STYLE} />
          이메일
        </FormLabel>
        <FormInput id="email" name="email" type="email" value={values.email} onChange={handleChange} />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.id}>
        <FormLabel>
          <FaceIcon style={ICON_STYLE} />
          아이디
        </FormLabel>
        <FormInput id="id" name="id" value={values.id} onChange={handleChange} />
        <FormErrorMessage>{errors.id}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.password}>
        <FormLabel>
          <VpnKeyIcon style={ICON_STYLE} />
          비밀번호        
        </FormLabel>
        <FormInput id="password" name="password" type="password" value={values.password} onChange={handleChange} />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControlContainer>
      <SubmitButton type="submit" disabled={isLoading} colorScheme="red">
        {isLoading ? <Spinner /> : '회원가입'}
      </SubmitButton>
    </Container>
  );
};

export default SignUpForm;
