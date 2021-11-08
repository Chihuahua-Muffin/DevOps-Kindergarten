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
import { useRouter } from 'next/router';
import FaceIcon from '@mui/icons-material/Face';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { useAppDispatch } from '#/hooks/useRedux';
import { loginAsync, refreshAsync } from '#/redux/ducks/auth';
import useForm from '#/hooks/useForm';
import SignInValidation from '#/components/signin/SignInValidation';
import {
  TOAST_DURATION,
  TOAST_STATUS_SUCCESS,
  TOAST_STATUS_ERROR,
  ICON_STYLE,
  LANDING_PAGE_URL,
} from '#/constants';
import { LOGIN_ASYNC_FULFILLED, LOGIN_ASYNC_REJECTED } from '#/redux/ducks/auth/actions';

const Container = chakra(Box, {
  baseStyle: {
    position: 'relative',
    top: '27%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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

const SignInForm = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = useCallback(async (submitValues) => {
    const { username, password } = submitValues;

    const result = await dispatch(loginAsync({ username, password }));

    if (result.type === LOGIN_ASYNC_FULFILLED) {
      const JWT_EXPIRY_TIME = 2 * 3600 * 1000; // 만료 시간 (2시간 밀리 초로 표현)
      setTimeout(() => {
        dispatch(refreshAsync(result.payload.refreshToken));
      }, JWT_EXPIRY_TIME - 60000); // 액세스 토큰 만료 1분전에 다시 갱신

      toast({
        title: '로그인 되었습니다.',
        description: `${username}님 환영합니다.`,
        status: TOAST_STATUS_SUCCESS,
        duration: TOAST_DURATION,
        isClosable: true,
      });

      router.replace(`/${LANDING_PAGE_URL}`);
    } else if (result.type === LOGIN_ASYNC_REJECTED) {
      toast({
        title: '로그인에 실패했습니다.',
        description: '다시 로그인을 해주세요.',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [toast, dispatch, router]);

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
    <Container as="form" onSubmit={handleSubmit}>
      <FormControlContainer isInvalid={errors.username}>
        <FormLabel>
          <FaceIcon style={ICON_STYLE} />
          아이디
        </FormLabel>
        <FormInput type="text" className="usernameInput" name="username" value={values.username} onChange={handleChange} />
        <FormErrorMessage id="usernameErrorText">{errors.username}</FormErrorMessage>
      </FormControlContainer>

      <FormControlContainer isInvalid={errors.password}>
        <FormLabel>
          <VpnKeyIcon style={ICON_STYLE} />
          비밀번호
        </FormLabel>
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
