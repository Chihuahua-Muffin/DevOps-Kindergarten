import Header from '#/components/common/Header';
import Head from 'next/head';

// 모든 페이지에 적용되는 컴포넌트
export const Layout: React.FunctionComponent = props =>
  <div>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
  </div>

export default Layout;