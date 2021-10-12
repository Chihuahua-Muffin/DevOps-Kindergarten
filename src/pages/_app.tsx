import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import type { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import store from '#/redux/store';
import theme from '#/styles/theme';

import MainLayout from '#/components/layouts/Main';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  /* ExplainLayout 적용 되어있으면 우선 적용 */
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <MainLayout>
          {/* eslint-disable-next-line */}
          {getLayout(<Component {...pageProps} />)}
        </MainLayout>
      </Provider>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// 차단 데이터 요구 사항이 있는 경우에만 이 메서드의 주석 처리를 제거하십시오.
// 애플리케이션의 모든 단일 페이지. 이렇게 하면 자동 정적 최적화를 수행하는 기능이
// 비활성화되어 앱의 모든 페이지가 서버 측에서 렌더링됩니다.

// MyApp.getInitialProps = () => {
//   const accessToken = storage.get(ACCESS_TOKEN); // 로그인 정보를 로컬스토리지에서 가져옵니다.
//   console.log('로그인 정보:', accessToken);
//   // if (!accessToken) return;
//   // return { sub } = accessToken;
// };

export default MyApp;
