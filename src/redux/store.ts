import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducer from '#/redux/ducks';

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

/* 덩크 사용시 */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<Store<AppState>>(makeStore);

export default store;
