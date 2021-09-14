import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '#/components/common/header';

// import jwtDecode from 'jwt-decode';
import storage from '#/lib/storage';
import { useAppDispatch } from '#/hooks/useRedux';
import { ACCESS_TOKEN } from '#/constants';
import { login } from '#/redux/reducers/auth';

interface LayoutProps {
  children: React.ReactNode;
}

// interface DecodeProps {
//   sub: string;
//   auth: string;
//   exp: number;
// }

// 모든 페이지에 적용되는 컴포넌트
const Layout = ({ children }: LayoutProps) => {
  const authDispatch = useAppDispatch();
  /* 새로고침 후에도 로그인 정보 확인 후 로그인 유지 */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = storage.get(ACCESS_TOKEN); // 로그인 정보를 로컬스토리지에서 가져옵니다.
      if (!accessToken) return;

      // Todo: 액세스 토큰 자체를 로컬스토리지에 저장 후, 토큰을 디코드해서 로그인 정보를 가져오도록 변경
      // const loginData: DecodeProps = jwtDecode(accessToken.data.token);
      authDispatch(login(accessToken.sub));
    }
  });

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
