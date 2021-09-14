import {
  configureStore,
  // 덩크 사용시
  /* ThunkAction,
  Action, */
} from '@reduxjs/toolkit';
import reducer from '#/redux/reducers';

export function makeStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

/* 덩크 사용시 */
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action<string>
// >;

export default store;
