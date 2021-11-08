import axios from 'axios';
import type { Role } from '#/types/user';

const LOGIN_API_URL = '/api/login';
const SIGNUP_API_URL = '/api/signup';
const LOGOUT_API_URL = '/api/logout';
const REFRESH_API_URL = '/api/refresh';

// eslint-disable-next-line max-len
export const loginAPI = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  axios.post(LOGIN_API_URL, {
    username,
    password,
  });

// eslint-disable-next-line max-len
export const singUpAPI = ({
  email,
  name,
  password,
  status,
  username,
}: {
  email: string | undefined;
  name: string | undefined;
  password: string;
  status: Role | undefined;
  username: string;
}) => axios.post(SIGNUP_API_URL, { email, name, password, status, username });

export const logoutAPI = (username: string) =>
  axios.post(LOGOUT_API_URL, {
    username,
  });

export const refreshAPI = (refreshToken: string) =>
  axios.post(REFRESH_API_URL, {
    refreshToken,
  });
