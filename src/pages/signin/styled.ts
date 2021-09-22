import { chakra, Box } from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: CONTENT_WIDTH,
    height: '89vh',
  },
});
