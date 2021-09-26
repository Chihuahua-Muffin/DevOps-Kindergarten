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
  },
});

const FormContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    width: '100%',
  },
});

const CommentHeaderText = chakra(Text, {
  baseStyle: {
    fontSize: '1.2rem',
    margin: '1rem 0',
  },
});

const CommentButton = chakra(Button, {
  baseStyle: {
    fontSize: '1rem',
    margin: '1rem 0',
    width: '7rem',
  },
});

const CommentForm = () => (
  <Container>
    <Divider />
    <CommentHeaderText>댓글</CommentHeaderText>
    <FormContainer as="form">
      <Textarea placeholder="댓글을 입력하세요." />
      {/* Todo: 코멘트 API 연결 */}
      <CommentButton colorScheme="teal">댓글 달기</CommentButton>
    </FormContainer>
  </Container>
);

export default CommentForm;
