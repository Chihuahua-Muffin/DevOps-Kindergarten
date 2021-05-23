import React from 'react';
import {
  chakra,
  Text,
} from '@chakra-ui/react';

interface ExplainContentProps {
  children: React.ReactNode;
}

const Content = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
  },
});

const ExplainContent = ({ children }: ExplainContentProps) => (
  <Content>
    {children}
  </Content>
);

export default ExplainContent;
