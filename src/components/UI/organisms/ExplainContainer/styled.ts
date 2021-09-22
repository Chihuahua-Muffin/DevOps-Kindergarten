import { chakra, Box } from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    width: CONTENT_WIDTH,
    margin: 'auto',
  },
});
