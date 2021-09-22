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
    margin: 'auto',
    flexDirection: 'column',
    width: CONTENT_WIDTH,
  },
});

// 댓글 컨테이너로, 데이터들을 Comment에 넘겨주어야 함.
// Todo: props로 url 넘어오면 axios로 데이터 받아와서 코멘트 출력
const CommentList = () => (
  <CommentListContainer>
    <Comment />
  </CommentListContainer>
);

export default CommentList;
