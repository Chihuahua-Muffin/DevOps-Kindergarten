import { chakra, Box } from '@chakra-ui/react';
import { HEADER_HEIGHT } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    top: HEADER_HEIGHT,
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
