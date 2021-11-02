import React from 'react';
import { chakra, Text } from '@chakra-ui/react';

const ChakraTitle = chakra(Text, {
  baseStyle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: 'gray.600',
  },
});

// eslint-disable-next-line arrow-body-style
const Title = ({ title }: { title: string }) => {
  return <ChakraTitle>{title}</ChakraTitle>;
};

export default Title;
