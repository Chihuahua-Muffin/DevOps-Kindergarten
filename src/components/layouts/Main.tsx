import React, { useEffect } from 'react';
import Head from 'next/head';
import moment from 'moment';

// import jwtDecode from 'jwt-decode';
import storage from '#/lib/storage';
import Header from '#/components/common/header/Header';
import { useAppDispatch } from '#/hooks/useRedux';
import { REFRESH_TOKEN } from '#/constants';
import JSUtility from '#/lib/JSUtility';
import { loginAsync } from '#/redux/ducks/auth';

interface LayoutProps {
  children: React.ReactNode;
}

// 모든 페이지에 적용되는 컴포넌트
const MainLayout = ({ children }: LayoutProps) => {
  const authDispatch = useAppDispatch();
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

      console.log('MainLayout');
      

      // Todo: refreshToken 가지고 리프레시 API 호출하기
    }
  }, []);

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
