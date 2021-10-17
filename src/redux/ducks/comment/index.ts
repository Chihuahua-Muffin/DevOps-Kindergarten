// // ref: https://github.com/reduxjs/cra-template-redux-typescript/blob/master/template/src/features/counter/counterSlice.ts
// import axios from 'axios';
// import {
//   createAsyncThunk,
//   createSlice,
// } from '@reduxjs/toolkit';

// import type { AppState } from '#/redux/store';
// import type { Comment } from '#/types';

// import { } from '#/lib/api/comment';
// import { COMMENT_ASYNC, COMMENT_ASYNC_FULFILLED, SLICE_NAME } from './actions';

// const initialState = {

// };

// export const commentAsync = createAsyncThunk(
//   COMMENT_ASYNC,
//   async (refreshTokenIncome: string) => {
//     const result = await refreshAPI(refreshTokenIncome);
//     // eslint-disable-next-line no-console
//     if (JSUtility.isDevelopment()) console.log('refreshAsync createAsyncThunk result.data', result.data);
//     const { accessToken, refreshToken } = result.data;
//     const refreshTokenWithExpire = {
//       refreshToken,
//       expire: JSUtility.convertCurrentTimeToTwoWeeksLaterInUnix(), // 14일로 지정
//     };

//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // 액세스 토큰을 모든 API 마다 보내도록 설정
//     storage.set(REFRESH_TOKEN, refreshTokenWithExpire); // 리프레시 토큰은 로컬스토리지에 저장

//     return result.data;
//   },
// );

// export const authSlice = createSlice({
//   name: SLICE_NAME,
//   initialState,
//   // '리듀서' 필드를 사용하면 리듀서를 정의하고 관련 액션을 생성할 수 있습니다.
//   reducers: {
//     // login: (state, action: PayloadAction<string>) => {
//     //   state.isLogin = true;
//     //   state.username = action.payload;
//     // },
//     // logout: (state) => {
//     //   state.isLogin = false;
//     //   state.username = '';
//     // },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(commentAsync.fulfilled, (state, action) => {
//         state.isLogin = true;
//         state.username = action.payload.username;
//         state.userId = action.payload.userId;
//         state.authority = action.payload.authority;
//       });
//   },
// });

// // export const { logout } = authSlice.actions;

// export default authSlice.reducer;
