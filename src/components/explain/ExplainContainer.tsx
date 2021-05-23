import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';

interface ExplainContainerProps {
  children: React.ReactNode;
}

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    width: '800px',
    margin: 'auto',
  },
});

const ExplainContainer = ({ children }: ExplainContainerProps) => (
  <Container>
    {children}
  </Container>
);

export default ExplainContainer;
