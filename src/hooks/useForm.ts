import React, { useEffect, useState, useCallback } from 'react';
import { ADMIN_ROLE, STUDENT_ROLE, EDUCATOR_ROLE } from '#/constants';

type Role = typeof ADMIN_ROLE | typeof STUDENT_ROLE | typeof EDUCATOR_ROLE;

type useFormProps = {
  initialValues: {
    name?: string, // 유저의 이름
    email?: string, // 이메일
    role?: Role, // 역할
    username: string, // 아이디와 같은 역할
    password: string, // 비밀번호
  },
  onSubmit: (values: any) => any, // eslint-disable-line
  validate: any, // eslint-disable-line
};

type errorProps = {
  name?: string,
  email?: string,
  role?: string,
  username?: string,
  password?: string,
};

function useForm({ initialValues, onSubmit, validate }: useFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<errorProps>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }, [values]);

  const handleSubmit = useCallback((event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    setErrors(validate(values));
  }, [validate, values]);

  useEffect(() => {
    (async () => {
      if (isLoading) {
        if (Object.keys(errors).length === 0) {
          await onSubmit(values);
        }
        setIsLoading(false);
      }
    })();
  }, [values, errors, isLoading, onSubmit]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
