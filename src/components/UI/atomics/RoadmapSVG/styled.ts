import { Box, chakra } from '@chakra-ui/react';

export const PathBox = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    top: '0',
    width: '1000px',
    height: '100%',
    margin: 'auto',
    zIndex: '-1',
    '& path': {
      strokeDasharray: '2600',
      opacity: '0.1',
      animation: 'dash 4s ease-in-out infinite',
    },
    '& svg': {
      width: '100%',
      height: '600px',
    },
    '@keyframes dash': {
      from: {
        strokeDashoffset: '5200',
      },
      to: {
        strokeDashoffset: '0',
      },
    },
  },
});
