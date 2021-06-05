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

// 댓글 컨테이너로, 데이터들을 Comment에 넘겨주어야 함.
// Axios 연동되면 구현
const CommentList = () => (
  <CommentListContainer>
    <Comment />
  </CommentListContainer>
);

export default CommentList;
