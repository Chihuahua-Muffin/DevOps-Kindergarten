// https://github.com/reduxjs/cra-template-redux-typescript/blob/master/template/src/features/counter/counterSlice.ts
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';

import type { AppState } from '#/redux/store';
import type { AuthState } from './types';
import { loginAPI, logoutAPI, refreshAPI } from '#/lib/api/auth';
import storage from '#/lib/storage';
import { REFRESH_TOKEN } from '#/constants';
import JSUtility from '#/lib/JSUtility';

const initialState: AuthState = {
  username: '',
  userId: null,
  authority: [],
  isLogin: false,
};

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }: { username: string, password: string }) => {
    const JWT_EXPIRY_TIME = 2 * 3600 * 1000; // 만료 시간 (2시간 밀리 초로 표현)
    const result = await loginAPI({ username, password });
    console.log('createAsyncThunk result.data', result.data);

    const { accessToken, refreshToken } = result.data;
    const refreshTokenWithExpire = {
      refreshToken,
      expire: JSUtility.convertCurrentTimeToTwoWeeksLaterInUnix(), // 14일로 지정
    };

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // 액세스 토큰을 모든 API 마다 보내도록 설정
    setTimeout(() => refreshAPI(refreshToken), JWT_EXPIRY_TIME - 60000); // 액세스 토큰 만료 1분전에 다시 갱신
    storage.set(REFRESH_TOKEN, refreshTokenWithExpire); // 리프레시 토큰은 로컬스토리지에 저장

    return result.data;
  },
);

export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async (username: string) => {
    const result = await logoutAPI(username); // 로그아웃 API 요청

    storage.remove(REFRESH_TOKEN); // 리프레시 토큰 삭제
    delete axios.defaults.headers.common.Authorization; // 액세스 토큰 헤더에서 삭제

    return result;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // '리듀서' 필드를 사용하면 리듀서를 정의하고 관련 액션을 생성할 수 있습니다.
  reducers: {
    // login: (state, action: PayloadAction<string>) => {
    //   state.isLogin = true;
    //   state.username = action.payload;
    // },
    logout: (state) => {
      state.isLogin = false;
      state.username = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLogin = true;
        state.username = action.payload.username;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLogin = false;
        state.username = '';
      });
  },
});

export const { logout } = authSlice.actions;

export const selectAuth = (state: AppState) => state.auth;

export default authSlice.reducer;
