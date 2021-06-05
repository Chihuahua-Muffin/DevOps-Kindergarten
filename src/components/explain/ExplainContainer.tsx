import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

interface ExplainContainerProps {
  children: React.ReactNode;
}

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    width: CONTENT_WIDTH,
    margin: 'auto',
  },
});

const ExplainContainer = ({ children }: ExplainContainerProps) => (
  <Container>
    {children}
  </Container>
);

export default ExplainContainer;
