import { useEffect, useState } from 'react';

type useFormProps = {
  initialValues: {
    name: string,
    email: string,
    id: string,
    password: string,
  },
  onSubmit: (values: any) => any,
  validate: any,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    (async () => {
      if (isLoading) {
        if (Object.keys(errors).length === 0) {
          await onSubmit(values);
        }
        setIsLoading(false);
      }
    })();
  }, [errors, isLoading]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
