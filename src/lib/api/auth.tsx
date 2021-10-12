import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEV_SERVER_URL;
axios.defaults.withCredentials = true; // 토큰 쿠키 받기

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
