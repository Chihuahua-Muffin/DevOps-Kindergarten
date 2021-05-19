type SignInValidationProps = {
  id?: string,
  password?: string,
}

export default function SignUpValidation({ id, password }: SignInValidationProps) {
  const errors: SignInValidationProps = {};

  if (!id) {
    errors.id = '아이디가 입력되지 않았습니다.';
  } else if (id.length < 6) {
    errors.id = '6자 이상의 아이디를 사용해야 합니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 6) {
    errors.password = '6자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
}
