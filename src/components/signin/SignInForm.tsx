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
import SignInValidation from '#/components/signin/SignInValidation';

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
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 2000));
      // 성공 시
      toast({
        title: `로그인 되었습니다!`,
        description: `${values.id}님 환영합니다!`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      // 실패 시
      // toast({
      //   title: `로그인에 실패했습니다!`,
      //   description: '존재하지 않는 회원입니다.',
      //   status: 'error',
      //   duration: 9000,
      //   isClosable: true,
      // });
    },
    validate: SignInValidation,
  });

  return (
    <Container as='form' onSubmit={handleSubmit}>
      <FormControlContainer isInvalid={errors.id}>
        <FormLabel>아이디</FormLabel>
        <FormInput id='id' name='id' value={values.id} onChange={handleChange} />
        <FormErrorMessage>{errors.id}</FormErrorMessage>
      </FormControlContainer>
      <FormControlContainer isInvalid={errors.password}>
        <FormLabel>비밀번호</FormLabel>
        <FormInput id='password' name='password' type='password' value={values.password} onChange={handleChange} />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControlContainer>
      <SubmitButton type='submit' disabled={isLoading} colorScheme='teal'>
        {isLoading ? <Spinner /> : '로그인'}
      </SubmitButton>
    </Container>
  );
};

export default SignInForm;