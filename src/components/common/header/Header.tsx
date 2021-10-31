import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  chakra,
  Spacer,
  Button,
  Box,
} from '@chakra-ui/react';
import HeaderNavigation from '#/components/common/header/HeaderNavigation';
import { HEADER_HEIGHT } from '#/constants';

const HeaderContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadow: 'md',
    position: 'sticky',
    backgroundColor: 'white',
    top: '0',
    height: HEADER_HEIGHT,
    width: '100%',
    zIndex: '5',
  },
});

const FlexItem = chakra(Box, {
  baseStyle: {
    padding: '1.5rem',
  },
});

const Header = () => {
  const [isHeaderShow, setIsHeaderShow] = useState(true);
  const router = useRouter();
  const { pathname } = router;

  const isLecturePage = useCallback(() => {
    const splittedPathname = pathname.split('/');
    return (splittedPathname.includes('lecture')) && (splittedPathname.length > 2);
  }, [pathname]);

  useEffect(() => {
    if (isLecturePage()) {
      setIsHeaderShow(false);
    } else {
      setIsHeaderShow(true);
    }
  }, [isLecturePage]);

  return (
    <>
      {isHeaderShow && (
        <HeaderContainer as="header">
          <FlexItem>
            <Link href="/"><Button>로고</Button></Link>
          </FlexItem>
          <Spacer />
          <FlexItem>
            <HeaderNavigation />
          </FlexItem>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
