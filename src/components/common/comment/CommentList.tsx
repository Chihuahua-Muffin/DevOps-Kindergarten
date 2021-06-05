import React from 'react';
import {
  chakra,
  Box,
} from '@chakra-ui/react';
import Comment from './Comment';
import { CONTENT_WIDTH } from '#/constants';

const CommentListContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: CONTENT_WIDTH,
  },
});

const CommentList = () => {
  return (
    <CommentListContainer>
      <Comment />
    </CommentListContainer>
  );
};

export default CommentList;
