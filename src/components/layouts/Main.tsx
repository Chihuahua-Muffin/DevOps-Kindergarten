import React, { useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

import storage from '#/lib/storage';
import Header from '#/components/common/header/Header';
import { useAppDispatch, useAppSelector } from '#/hooks/useRedux';
import { REFRESH_TOKEN } from '#/constants';
import JSUtility from '#/lib/JSUtility';
import { refreshAsync } from '#/redux/ducks/auth';
import { initialUserLectureProgress } from '#/redux/ducks/user';
import { getUserLectureProgressAPI } from '#/lib/api/user';
import { REFRESH_ASYNC_FULFILLED, REFRESH_ASYNC_REJECTED } from '#/redux/ducks/auth/actions';

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_DEV_SERVER_URL;
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true; // 토큰 쿠키 받기

// 모든 페이지에 적용되는 컴포넌트
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { isLogin, userId } = useAppSelector((state) => state.auth);

  /* 새로고침 후에도 로그인 정보 확인 후 로그인 유지 */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tokenObject = storage.get(REFRESH_TOKEN); // 로그인 정보를 로컬스토리지에서 가져옵니다.
      if (!tokenObject) return;

      const { refreshToken, expire } = tokenObject;
      // 리프레시 토큰은 있고 유효기간이 지났을 때
      if (refreshToken && JSUtility.isExpiredTokenCompareWithCurrentTime(expire)) {
        storage.remove(REFRESH_TOKEN);
        return;
      }

      (async () => {
        const result = await dispatch(refreshAsync(refreshToken));

        if (result.type === REFRESH_ASYNC_FULFILLED) {
          const JWT_EXPIRY_TIME = 2 * 3600 * 1000; // 만료 시간 (2시간 밀리 초로 표현)
          setTimeout(() => {
            dispatch(refreshAsync(refreshToken));
          }, JWT_EXPIRY_TIME - 60000); // 액세스 토큰 만료 1분전에 다시 갱신
        } else if (result.type === REFRESH_ASYNC_REJECTED) {
          // eslint-disable-next-line no-console
          console.log(`${REFRESH_ASYNC_REJECTED} is occur`);
        }
      })();
    }
  }, [dispatch]);

  // 유저 lecture 정보 불러오기
  useEffect(() => {
    if (!isLogin) return;

    (async () => {
      const res = await getUserLectureProgressAPI(userId);
      dispatch(initialUserLectureProgress(res.data));
    })();
  }, [dispatch, isLogin, userId]);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
