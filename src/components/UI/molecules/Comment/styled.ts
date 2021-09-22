import { chakra, Box } from '@chakra-ui/react';

export const Container = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    left: '0',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#EDF2F7', // gray 100
    },
  },
});
