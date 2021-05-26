type SignUpValidationProps = {
  name?: string,
  email?: string,
  id?: string,
  password?: string,
}

const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export default function SignUpValidation({
  name, email, id, password,
}: SignUpValidationProps) {
  const errors: SignUpValidationProps = {};

  if (!name) {
    errors.name = '이름이 입력되지 않았습니다.';
  }


  if (!email) {
    errors.email = '이메일이 입력되지 않았습니다.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (!id) {
    errors.id = '아이디가 입력되지 않았습니다.';
  } else if (id.length < 6) {
    errors.id = '6자 이상의 아이디를 사용해야 합니다.';
  } else if (korean.test(id)) {
    errors.id = '아이디는 영문자로 이루어져야 합니다.';
  }

  if (!password) {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (password.length < 6) {
    errors.password = '6자 이상의 패스워드를 사용해야 합니다.';
  }

  return errors;
}
