import React, { ReactNode } from 'react';
import { chakra, Text } from '@chakra-ui/react';

const ChakraText = chakra(Text, {
  baseStyle: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'gray.600',
  },
});

const SliderItemHeader = ({ children }: { children: ReactNode }) => (
  <ChakraText>{children}</ChakraText>
);

export default SliderItemHeader;
