import React from 'react';
import * as Styled from './styled';

interface ExplainContainerProps {
  children: React.ReactNode;
}

const ExplainContainer = ({ children }: ExplainContainerProps) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

export default ExplainContainer;
