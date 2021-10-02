import React from 'react';
import {
  chakra,
  Text,
} from '@chakra-ui/react';
import ExplainAnchor from '#/components/explain/ExplainAnchor';

interface ExplainSubTitleProps {
  children: React.ReactNode;
  id: string;
}

const SubTitle = chakra(Text, {
  baseStyle: {
    display: 'flex',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '1.2rem 0',
    scrollMarginTop: '5.6rem',
    '&:hover a': {
      display: 'block',
    },
  },
});

const ExplainSubTitle = ({ children, id }: ExplainSubTitleProps) => (
  <SubTitle id={id} as="h1">
    {children}
    <ExplainAnchor id={id} />
  </SubTitle>
);

export default ExplainSubTitle;
