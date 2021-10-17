import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

import type { Comment } from '#/types';
import CommentItem from './CommentItem';
import { CONTENT_WIDTH } from '#/constants';

const CommentListContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    rowGap: '1.4rem',
    width: CONTENT_WIDTH,
  },
});

// 댓글 컨테이너로, 데이터들을 Comment에 넘겨주어야 함.
const CommentList = ({ commentList }: { commentList: Comment[] }) => (
  <CommentListContainer>
    {commentList.map((comment) => (
      <CommentItem
        commentId={comment.commentId}
        content={comment.content}
        username={comment.username}
        createdDate={comment.createdDate}
        updatedDate={comment.updatedDate}
        recommentList={comment.recommentList}
      />
    ))}
  </CommentListContainer>
);

export default CommentList;
