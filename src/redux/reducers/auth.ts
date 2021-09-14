import {
  /* createAsyncThunk, */
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type {
  AppState,
  /* AppThunk */
} from '#/redux/store';

export interface authState {
  username: string;
  isLogin: boolean;
}

const initialState: authState = {
  username: '',
  isLogin: false,
};

// 아래 함수를 썽크라고 하며 비동기 논리를 수행할 수 있습니다.
// 일반 작업처럼 디스패치할 수 있습니다: `dispatch(incrementAsync(10))`.
// 이것은 `dispatch` 함수를 첫 번째 인수로 사용하여 썽크를 호출합니다.
// 그런 다음 비동기 코드를 실행할 수 있고 다른 작업을 전달할 수 있습니다.
// 썽크는 일반적으로 비동기 요청을 만드는 데 사용됩니다.

// 앱이 로딩되기 전에 비동기 처리가 필요할 때 thunk를 사용해준다.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount)
//     // The value we return becomes the `fulfilled` action payload
//     return response.data
//   }
// )

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // '리듀서' 필드를 사용하면 리듀서를 정의하고 관련 액션을 생성할 수 있습니다.
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      // Redux 툴킷을 사용하면 리듀서에서 "변경" 로직을 작성할 수 있습니다.
      // Immer 라이브러리를 사용하기 때문에 실제로 상태를 변경하지 않습니다.
      // Immer 라이브러리는 "초안 상태"에 대한 변경 사항을 감지하고 해당
      // 변경 사항을 기반으로 완전히 새로운 불변 상태를 생성합니다.
      state.isLogin = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = '';
    },
  },
  // 'extraReducers' 필드를 사용하면 createAsyncThunk 또는 다른 슬라이스에서
  // 생성된 작업을 포함하여 다른 곳에서 정의된 작업을 슬라이스가 처리할 수 있습니다.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.value += action.payload
  //     })
  // },
});

export const { login, logout } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth)`
// 아래 함수는 선택기라고 하며 상태에서 값을 선택할 수 있습니다.
// 선택자는 슬라이스 파일 대신 사용되는 인라인으로 정의할 수도 있습니다.
// 예: `useSelector((state: RootState) => state.auth)`
export const selectAuth = (state: AppState) => state.auth;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// 동기화 및 비동기 논리를 모두 포함할 수 있는 썽크를 직접 작성할 수도 있습니다.
// 다음은 현재 상태를 기반으로 조건부로 작업을 전달하는 예입니다.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }

export default authSlice.reducer;
