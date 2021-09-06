import axios from 'axios';
import { LOGIN_API_URL } from '#/constants';

interface loginProps {
  id: string;
  password: string;
}

export const loginAPI = ({ id, password }: loginProps) => axios.post(LOGIN_API_URL, {
  username: id,
  password,
});

export const someThing = 'someThing';
