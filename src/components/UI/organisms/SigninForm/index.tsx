import React, { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { useAppDispatch } from '#/hooks/useRedux';
import { login } from '#/redux/reducers/auth';
import useForm from '#/hooks/useForm';
import SignInValidation from '#/validators/signInValidation';
import {
  TOAST_DURATION,
  TOAST_STATUS_SUCCESS,
  TOAST_STATUS_ERROR,
  ICON_STYLE,
  LANDING_PAGE_URL,
  ACCESS_TOKEN,
} from '#/constants';
import storage from '#/lib/storage';
import { loginAPI } from '#/lib/api/auth';
// import JSUtility from '#/lib/JSUtility';
import * as Styled from './styled';

interface DecodeProps {
  sub: string;
  auth: string;
  exp: number;
}

const SigninForm = () => {
  const toast = useToast();
  const authDispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit = useCallback(async (submitValues) => {
    const { username, password } = submitValues;
    try {
      // 성공 시
      // Todo: 액세스토큰 자체를 로컬스토리지에 저장
      const result = await loginAPI({ username, password });
      const loginData: DecodeProps = jwtDecode(result.data.token);
      storage.set(ACCESS_TOKEN, loginData);
      // const difftime = JSUtility.compareWithCurrentTimeAsMinute(loginData.exp);
      // console.log('convert time', difftime);
      authDispatch(login(username));
      router.replace(LANDING_PAGE_URL);
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
  }, [toast, authDispatch, router]);

  const {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  } = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit,
    validate: SignInValidation,
  });

  return (
    <Styled.Container as="form" onSubmit={handleSubmit}>
      <Styled.FormControlContainer isInvalid={errors.username}>
        <Styled.SubmitFormLabel>
          <FaceIcon style={ICON_STYLE} />
          아이디
        </Styled.SubmitFormLabel>
        <Styled.FormInput type="text" className="usernameInput" name="username" value={values.username} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage id="usernameErrorText">{errors.username}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>

      <Styled.FormControlContainer isInvalid={errors.password}>
        <Styled.SubmitFormLabel>
          <VpnKeyIcon style={ICON_STYLE} />
          비밀번호
        </Styled.SubmitFormLabel>
        <Styled.FormInput id="password" name="password" type="password" value={values.password} onChange={handleChange} />
        <Styled.SubmitFormErrorMessage>{errors.password}</Styled.SubmitFormErrorMessage>
      </Styled.FormControlContainer>
      <Styled.SubmitButton id="submitButton" type="submit" disabled={isLoading} colorScheme="teal">
        {isLoading ? <Styled.FormSpinner /> : '로그인'}
      </Styled.SubmitButton>
    </Styled.Container>
  );
};

export default SigninForm;
