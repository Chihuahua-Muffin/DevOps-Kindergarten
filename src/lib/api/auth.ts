import axios from 'axios';

const LOGIN_API_URL = '/api/login';
const LOGOUT_API_URL = '/api/logout';
const REFRESH_API_URL = '/api/refresh';

// eslint-disable-next-line max-len
export const loginAPI = ({ username, password }: {username: string, password: string}) => axios.post(LOGIN_API_URL, {
  username,
  password,
});

export const logoutAPI = (username: string) => axios.post(LOGOUT_API_URL, {
  username,
});

export const refreshAPI = (refreshToken: string) => axios.post(REFRESH_API_URL, {
  refreshToken,
});
