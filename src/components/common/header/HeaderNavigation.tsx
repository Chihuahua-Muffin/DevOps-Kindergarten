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
  const [select, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const splitPath = router.pathname.split('/');
    setSelected(splitPath);
  }, [router]);

  return (
    // SEO를 위한 HTML 태그
    <NavigationContainer as="nav">
      <Link href={`/${ROADMAP_PAGE_URL}`}>
        <NavItem colorScheme="teal" variant={select.includes(ROADMAP_PAGE_URL) ? 'solid' : 'ghost'}>
          로드맵
        </NavItem>
      </Link>
      <Spacer />
      <Link href={`/${LECTURE_PAGE_URL}`}>
        <NavItem colorScheme="teal" variant={select.includes(LECTURE_PAGE_URL) ? 'solid' : 'ghost'}>
          실습
        </NavItem>
      </Link>
      {loginState.isLogin
        ? <LoginStatusMenu />
        : (
          <Link href={`/${LOGIN_PAGE_URL}`}>
            <NavItem colorScheme="teal" variant={select.includes(LOGIN_PAGE_URL) ? 'solid' : 'ghost'}>
              로그인
            </NavItem>
          </Link>
        )}
    </NavigationContainer>

  );
};

export default HeaderNavigation;
