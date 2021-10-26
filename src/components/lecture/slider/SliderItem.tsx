import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

const ItemContainer = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '65vh',
    padding: '20px',
    backgroundColor: 'red.100',
  },
});

const SliderItem = ({ children }: { children: React.ReactNode }) => (
  <ItemContainer>
    {children}
  </ItemContainer>
);

export default SliderItem;
