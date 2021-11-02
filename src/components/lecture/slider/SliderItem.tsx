import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

const ItemContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    width: '100%',
    height: '70vh',
    padding: '30px',
    overflowY: 'auto',
  },
});

const SliderItem = ({ children }: { children: React.ReactNode }) => (
  <ItemContainer>{children}</ItemContainer>
);

export default SliderItem;
