import React from 'react';
import {
  chakra,
  Text,
} from '@chakra-ui/react';
import ExplainAnchor from '#/components/explain/ExplainAnchor';

interface ExplainTitleProps {
  children: React.ReactNode;
  id: string;
}

const Title = chakra(Text, {
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

const ExplainTitle = ({ children, id }: ExplainTitleProps) => (
  <Title id={id} as="h1">
    {children}
    <ExplainAnchor id={id} />
  </Title>
);

export default ExplainTitle;
