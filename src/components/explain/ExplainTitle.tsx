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
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '30px 0',
  },
});

const ExplainTitle = ({ children }: ExplainTitleProps) => (
  <Title as="h1">
    {children}
  </Title>
);

export default ExplainTitle;
