import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    padding: '1.5em',
  },
});

const Header = () => {
  const [isShowHeader, setIsShowHeader] = useState(true);
  const router = useRouter();
  const disapearHeaderPathList = useMemo(() => ['/dictionary/create'], []);

  useEffect(() => {
    if (disapearHeaderPathList.includes(router.pathname)) setIsShowHeader(false);
    else setIsShowHeader(true);
  }, [router.pathname, disapearHeaderPathList]);

  return (
    isShowHeader
      ? (
        <HeaderContainer as="header">
          <FlexItem>
            <Link href="/"><Button>로고</Button></Link>
          </FlexItem>
          <Spacer />
          <FlexItem>
            <HeaderNavigation />
          </FlexItem>
        </HeaderContainer>
      ) : ''
  );
};

export default Header;
