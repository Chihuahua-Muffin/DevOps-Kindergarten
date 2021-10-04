import React from 'react';
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

const Header = () => (
  // SEO를 위한 HTML 태그
  <HeaderContainer as="header">
    <FlexItem>
      <Link href="/"><Button>로고</Button></Link>
    </FlexItem>
    <Spacer />
    <FlexItem>
      <HeaderNavigation />
    </FlexItem>
  </HeaderContainer>
);

export default Header;
