import React from 'react';
import {
  chakra,
  Text,
} from '@chakra-ui/react';

interface ExplainTitleProps {
  children: React.ReactNode;
}

const Title = chakra(Text, {
  baseStyle: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    margin: '1.6rem 0',
  },
});

const ExplainTitle = ({ children }: ExplainTitleProps) => (
  <Title as="h1">
    {children}
  </Title>
);

export default ExplainTitle;
