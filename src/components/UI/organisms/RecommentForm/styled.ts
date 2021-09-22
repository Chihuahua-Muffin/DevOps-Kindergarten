import { chakra, Input, Box, Button } from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

export const RecommentFormContainer = chakra(Box, {
  baseStyle: {
    padding: '10px',
    display: 'flex',
    width: CONTENT_WIDTH,
  },
});

export const FormInput = chakra(Input, {
  baseStyle: {
  },
});

export const FormButton = chakra(Button, {
  baseStyle: {
  },
});
