import React from 'react';
import type { AppProps /* , AppContext */ } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { LoginProvider } from '#/contexts/LoginContext';

import Layout from '#/components/Layout';
import theme from '#/utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LoginProvider>
        <Layout>
          {/* eslint-disable-next-line */}
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </ChakraProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = () => {
//   // try {
//   //   /* to do: 유저 상태 체크하는 API 필요함 */
//   // } catch (e) {
//   //   // storage.remove('loggedInfo');
//   //   // window.location.href = '/auth/login?expired';
//   // }
//   return { };
// };

export default MyApp;
