import React from 'react';
import {
  chakra,
  Box,
  Button,
  Text,
  Textarea,
  Divider,
} from '@chakra-ui/react';
import { CONTENT_WIDTH } from '#/constants';

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: CONTENT_WIDTH,
    marginBottom: '50px',
    marginTop: '50px',
  },
});

const FormContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const CommentHeaderText = chakra(Text, {
  baseStyle: {
    fontSize: '24px',
  },
});

const CommentForm = () => (
  <Container>
    <Divider />
    <CommentHeaderText>댓글</CommentHeaderText>
    <FormContainer as="form">
      <Textarea />
      {/* Todo: 코멘트 API 연결 */}
      <Button>댓글 달기</Button>
    </FormContainer>
  </Container>
);

export default CommentForm;
