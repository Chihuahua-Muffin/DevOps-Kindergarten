type SignInValidationProps = {
  username?: string,
  password?: string,
}

export default function SignUpValidation({ username, password }: SignInValidationProps) {
  const errors: SignInValidationProps = {};

  if (!username) {
    errors.username = '아이디가 입력되지 않았습니다.';
  } else if (username.length < 5) {
    errors.username = '5자 이상의 아이디를 사용해야 합니다.';
  } else if (username.length > 15) {
    errors.username = '15자 이하의 아이디를 사용해야 합니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 5) {
    errors.password = '5자 이상의 패스워드를 사용해야 합니다.';
  } else if (password.length > 15) {
    errors.password = '15자 이하의 비밀번호를 사용해야 합니다.';
  }

  return errors;
}
