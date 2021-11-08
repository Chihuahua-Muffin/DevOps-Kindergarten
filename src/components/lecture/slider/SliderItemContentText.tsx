import React, { ReactNode } from 'react';
import { chakra, Text } from '@chakra-ui/react';

const ChakraText = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    marginBottom: '5px',
    color: 'gray.800',
  },
});

const SliderItemContentText = ({ children }: { children: ReactNode }) => (
  <ChakraText>{children}</ChakraText>
);

export default SliderItemContentText;
