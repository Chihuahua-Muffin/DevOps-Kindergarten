import React from 'react';
import * as Styled from './styled';

interface ExplainContentProps {
  children: React.ReactNode;
}

const ContentText = ({ children }: ExplainContentProps) => (
  <Styled.Content>
    {children}
  </Styled.Content>
);

export default ContentText;
