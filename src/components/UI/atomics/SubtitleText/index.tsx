import React from 'react';
import Anchor from '#/components/UI/atomics/Anchor';
import * as Styled from './styled';

interface ExplainSubTitleProps {
  children: React.ReactNode;
  id: string;
}

const SubtitleText = ({ children, id }: ExplainSubTitleProps) => (
  <Styled.SubTitle id={id} as="h2">
    {children}
    <Anchor id={id} />
  </Styled.SubTitle>
);

export default SubtitleText;
