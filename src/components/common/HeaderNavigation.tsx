import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  chakra,
  Spacer,
  Box,
  Button,
} from '@chakra-ui/react';

const NavigationContainer = chakra(Box, {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const NavItem = chakra(Button, {
  baseStyle: {
    margin: "10px",
  },
})

const HeaderNavigation = () => {
  const router = useRouter();
  const [select, setSelected] = useState(router.pathname);

  useEffect(() => {
    setSelected(router.pathname);
  }, [router]);

  return (
    // SEO를 위한 HTML 태그
    <NavigationContainer as="nav">
      <Link href="/roadmap">
        <NavItem colorScheme="teal" variant={select === '/roadmap' ? "solid" : "ghost"}>
          로드맵
        </NavItem>
      </Link>
      <Spacer />
      <Link href="/signin">
        <NavItem colorScheme="teal" variant={select === '/signin' ? "solid" : "ghost"}>
          로그인
        </NavItem>
      </Link>
      <Link href="/signup">
        <NavItem colorScheme="teal" variant={select === '/signup' ? "solid" : "ghost"}>
          회원가입
        </NavItem>
      </Link>
      <Link href="/dictionary">
        <NavItem colorScheme="teal" variant={select === '/dictionary' ? "solid" : "ghost"}>
          사전
        </NavItem>
      </Link>
    </NavigationContainer>
  );
}

export default HeaderNavigation;