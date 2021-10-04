import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  chakra,
  Spacer,
  Box,
  Button,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
  LOGIN_PAGE_URL,
  LECTURE_PAGE_URL,
  ROADMAP_PAGE_URL,
  // DICTIONARY_PAGE_URL, 사전 페이지 삭제
} from '#/constants';
import { AppState } from '#/redux/store';
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
    margin: '1rem',
    fontSize: '1rem',
  },
});

const HeaderNavigation = () => {
  const router = useRouter();
  const loginState = useSelector((state: AppState) => state.auth);
  const [select, setSelected] = useState(router.pathname);

  useEffect(() => {
    setSelected(router.pathname);
  }, [router]);

  return (
    // SEO를 위한 HTML 태그
    <NavigationContainer as="nav">
      <Link href={ROADMAP_PAGE_URL}>
        <NavItem colorScheme="teal" variant={select === ROADMAP_PAGE_URL ? 'solid' : 'ghost'}>
          로드맵
        </NavItem>
      </Link>
      <Spacer />
      {/* <Link href={DICTIONARY_PAGE_URL}>
        <NavItem colorScheme="teal" variant={select === DICTIONARY_PAGE_URL ? 'solid' : 'ghost'}>
          사전
        </NavItem>
      </Link> */}
      <Link href={LECTURE_PAGE_URL}>
        <NavItem colorScheme="teal" variant={select === LECTURE_PAGE_URL ? 'solid' : 'ghost'}>
          실습
        </NavItem>
      </Link>
      {loginState.isLogin
        ? <LoginStatusMenu />
        : (
          <Link href={LOGIN_PAGE_URL}>
            <NavItem colorScheme="teal" variant={select === LOGIN_PAGE_URL ? 'solid' : 'ghost'}>
              로그인
            </NavItem>
          </Link>
        )}
    </NavigationContainer>

  );
};

export default HeaderNavigation;
