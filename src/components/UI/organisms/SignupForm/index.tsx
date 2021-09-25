import React from 'react';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';

import useForm from '#/hooks/useForm';
import SignUpValidation from '#/validators/signUpValidation';

import {
  ICON_STYLE,
  LANDING_PAGE_URL,
  TOAST_STATUS_SUCCESS,
  TOAST_DURATION,
  STUDENT_ROLE,
} from '#/constants';
import * as Styled from './styled';

const SignupForm = () => {
  const toast = useToast();
  const router = useRouter();
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
      username: '',
      password: '',
      role: STUDENT_ROLE,
    },
    onSubmit: async (submitValues) => {
      await new Promise((r) => setTimeout(r, 2000));
      toast({
        title: '회원가입 되었습니다!',
        description: `${submitValues.name}님 환영합니다!`,
        status: TOAST_STATUS_SUCCESS,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      router.replace(LANDING_PAGE_URL);
    },
    validate: SignUpValidation,
  });

  return (
    <Styled.Container as="form" onSubmit={handleSubmit}>

      <Styled.FormControlContainer isInvalid={errors.name}>
        <Styled.SubmitFormLabel>
          <PermIdentityIcon style={ICON_STYLE} />
          이름
        </Styled.SubmitFormLabel>
        <Styled.FormInput id="name" name="name" value={values.name} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage>{errors.name}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>

      <Styled.FormControlContainer isInvalid={errors.email}>
        <Styled.SubmitFormLabel>
          <EmailIcon style={ICON_STYLE} />
          이메일
        </Styled.SubmitFormLabel>
        <Styled.FormInput id="email" name="email" type="email" value={values.email} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage>{errors.email}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>

      <Styled.FormControlContainer isInvalid={errors.username}>
        <Styled.SubmitFormLabel>
          <FaceIcon style={ICON_STYLE} />
          아이디
        </Styled.SubmitFormLabel>
        <Styled.FormInput id="username" name="username" value={values.username} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage>{errors.username}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>

      <Styled.FormControlContainer isInvalid={errors.password}>
        <Styled.SubmitFormLabel>
          <VpnKeyIcon style={ICON_STYLE} />
          비밀번호
        </Styled.SubmitFormLabel>
        <Styled.FormInput id="password" name="password" type="password" value={values.password} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage>{errors.password}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>

      <Styled.SubmitButton type="submit" disabled={isLoading} colorScheme="red">
        {isLoading ? <Styled.FormSpinner /> : '회원가입'}
      </Styled.SubmitButton>
    </Styled.Container>
  );
};

export default SignupForm;
