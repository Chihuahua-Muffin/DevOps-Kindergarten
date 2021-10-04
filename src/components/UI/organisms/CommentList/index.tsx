import React from 'react';
import Comment from '../../molecules/Comment';
import * as Styled from './styled';

// 댓글 컨테이너로, 데이터들을 Comment에 넘겨주어야 함.
// Todo: props로 url 넘어오면 axios로 데이터 받아와서 코멘트 출력
const CommentList = () => (
  <Styled.Container>
    <Comment />
  </Styled.Container>
);

export default CommentList;
