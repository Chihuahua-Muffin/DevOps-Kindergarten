import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import * as Styled from './styled';
import {
  LOGIN_PAGE_URL,
  LECTURE_PAGE_URL,
  ROADMAP_PAGE_URL,
} from '#/constants';
import { AppState } from '#/redux/store';
<<<<<<< HEAD:src/components/common/header/HeaderNavigation.tsx
import LoginStatusMenu from './LoginStatusMenu';

const NavigationContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NavItem = chakra(Button, {
  baseStyle: {
    margin: '10px',
  },
});
=======
import LoginStatusMenu from '../HeaderLoginStatusMenu';
>>>>>>> parent of dc475a7 (TableOfContents 생성 & 댓글 생성 폼 생성 & 이론 페이지 Tool 컴포넌트 생성 (#68)):src/components/UI/molecules/HeaderNavigation/index.tsx

const HeaderNavigation = () => {
  const router = useRouter();
  const loginState = useSelector((state: AppState) => state.auth);
  const [select, setSelected] = useState(router.pathname);

  useEffect(() => {
    setSelected(router.pathname);
  }, [router]);

  return (
    // SEO를 위한 HTML 태그
    <Styled.NavigationContainer as="nav">
      <Link href={ROADMAP_PAGE_URL}>
        <Styled.NavItem colorScheme="teal" variant={select === ROADMAP_PAGE_URL ? 'solid' : 'ghost'}>
          로드맵
        </Styled.NavItem>
      </Link>
      <Styled.NavSpacer />
      {/* <Link href={DICTIONARY_PAGE_URL}>
        <NavItem colorScheme="teal" variant={select === DICTIONARY_PAGE_URL ? 'solid' : 'ghost'}>
          사전
        </NavItem>
      </Link> */}
      <Link href={LECTURE_PAGE_URL}>
        <Styled.NavItem colorScheme="teal" variant={select === LECTURE_PAGE_URL ? 'solid' : 'ghost'}>
          실습
        </Styled.NavItem>
      </Link>
      {loginState.isLogin
        ? <LoginStatusMenu />
        : (
          <Link href={LOGIN_PAGE_URL}>
            <Styled.NavItem colorScheme="teal" variant={select === LOGIN_PAGE_URL ? 'solid' : 'ghost'}>
              로그인
            </Styled.NavItem>
          </Link>
        )}
    </Styled.NavigationContainer>

  );
};

export default HeaderNavigation;
