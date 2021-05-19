import { useEffect, useState, useCallback } from 'react';

type useFormProps = {
  initialValues: {
    name?: string,
    email?: string,
    id: string,
    password: string,
  },
  onSubmit: (values: any) => any, // eslint-disable-line
  validate: any, // eslint-disable-line
};

type errorProps = {
  name?: string,
  email?: string,
  id?: string,
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
