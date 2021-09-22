import { chakra, Box } from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: CONTENT_WIDTH,
  },
});
