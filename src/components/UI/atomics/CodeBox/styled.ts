import { Box, Button, Text, chakra } from '@chakra-ui/react';

export const Container = chakra(Box, {
  baseStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});

export const CodeContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    backgroundColor: 'gray.50',
    width: '600px',
    padding: '10px',
    borderRadius: '5px',
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
});

export const Code = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    whiteSpace: 'pre',
    textAlign: 'start',
  },
});

export const CopyButton = chakra(Button, {
  baseStyle: {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '100',
    transform: 'translateY(-110%)',
  },
});
