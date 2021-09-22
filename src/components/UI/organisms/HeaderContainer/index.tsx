import React from 'react';
import Link from 'next/link';
import HeaderNavigation from '#/components/UI/molecules/HeaderNavigation';
import * as Styled from './styled';

const HeaderContainer = () => (
  <Styled.Container as="header">
    <Styled.FlexItem>
      <Link href="/"><Styled.LogoButton>로고</Styled.LogoButton></Link>
    </Styled.FlexItem>
    <Styled.HeaderSpacer />
    <Styled.FlexItem>
      <HeaderNavigation />
    </Styled.FlexItem>
  </Styled.Container>
);

export default HeaderContainer;
