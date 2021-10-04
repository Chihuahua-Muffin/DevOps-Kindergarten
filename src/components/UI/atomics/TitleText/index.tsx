import React from 'react';
import * as Styled from './styled';

interface ExplainTitleProps {
  children: React.ReactNode;
}

const TitleText = ({ children }: ExplainTitleProps) => (
  <Styled.Title as="h1">
    {children}
  </Styled.Title>
);

export default TitleText;
