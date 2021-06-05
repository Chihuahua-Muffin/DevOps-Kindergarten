import React from 'react';
import {
  chakra,
  Box,
  Input,
  Button,
} from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

const RecommentFormContainer = chakra(Box, {
  baseStyle: {
    padding: '10px',
    display: 'flex',
    width: CONTENT_WIDTH,
  },
});

const RecommentForm = () => (
  <RecommentFormContainer as="form">
    <Input />
    <Button>답글</Button>
  </RecommentFormContainer>
);

export default RecommentForm;
