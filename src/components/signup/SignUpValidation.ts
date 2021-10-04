interface SignUpValidationProps {
  name?: string;
  email?: string;
  username?: string;
  password?: string;
}

const NUMBER_ENGLISH_REGEX = /^[a-zA-Z0-9]+$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function SignUpValidation({
  name, email, username, password,
}: SignUpValidationProps) {
  const errors: SignUpValidationProps = {};

  if (!name) {
    errors.name = '이름이 입력되지 않았습니다.';
  }

  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!username) {
    errors.username = '아이디가 입력되지 않았습니다.';
  } else if (username.length < 5) {
    errors.username = '5자 이상의 아이디를 사용해야 합니다.';
  } else if (username.length > 15) {
    errors.username = '15자 이하의 아이디를 사용해야 합니다.';
  } else if (!NUMBER_ENGLISH_REGEX.test(username)) {
    errors.username = '아이디는 영문자 또는 숫자로 이루어져야 합니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 5) {
    errors.password = '5자 이상의 비밀번호를 사용해야 합니다.';
  } else if (password.length > 15) {
    errors.password = '15자 이하의 비밀번호를 사용해야 합니다.';
  } else if (!NUMBER_ENGLISH_REGEX.test(password)) {
    errors.password = '비밀번호는 영문자 또는 숫자만 가능합니다.';
  }

  return errors;
}
