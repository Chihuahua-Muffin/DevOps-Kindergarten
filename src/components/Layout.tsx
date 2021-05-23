import React from 'react';
import Head from 'next/head';
import Header from '#/components/common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

// 모든 페이지에 적용되는 컴포넌트
const Layout = ({ children }: LayoutProps) => (
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

export default Layout;
