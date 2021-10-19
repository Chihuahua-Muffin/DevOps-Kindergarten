import React, { useState, useCallback } from 'react';
import { chakra, Box, Button, Text, Textarea, Divider, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { CONTENT_WIDTH, EXPLAIN_PAGE_LIST, TOAST_DURATION, TOAST_STATUS_ERROR, TOAST_STATUS_INFO } from '#/constants';
import { postCommentAPI } from '#/lib/api/comment';
import { useAppSelector } from '#/hooks/useRedux';

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
    width: '100%',
  },
});

const CommentForm = ({ getCommentList }: { getCommentList: () => Promise<void> }) => {
  const toast = useToast();
  const [content, setContent] = useState('');
  const { isLogin, userId } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const { lectureNumber } = router.query;
  const { pathname } = router;

  const onChangeTextArea = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }, []);

  const onSubmitForm = useCallback(async () => {
    const pageName = pathname.split('/')[2];

    const comment = {
      content,
      pageId: lectureNumber ? Number(lectureNumber) : null,
      pageName: EXPLAIN_PAGE_LIST.includes(pageName) ? pageName : '',
      parentId: null,
      userId,
    };

    try {
      await postCommentAPI(comment);
      setContent('');
      toast({
        title: '댓글을 달았습니다.',
        status: TOAST_STATUS_INFO,
        duration: TOAST_DURATION,
        isClosable: true,
      });
      getCommentList();
    } catch (error) {
      toast({
        title: '댓글을 달기에 문제가 생겼습니다!',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [content, lectureNumber, pathname, userId, toast, getCommentList]);

  return (
    <Container>
      <Divider />
      <CommentHeaderText>댓글</CommentHeaderText>
      <FormContainer as="form">
        <Textarea value={content} onChange={onChangeTextArea} placeholder="댓글을 입력하세요." />
        {isLogin
          ? <CommentButton onClick={onSubmitForm} colorScheme="teal">댓글 달기</CommentButton>
          : <CommentButton disabled colorScheme="teal">로그인을 해주세요</CommentButton>}
      </FormContainer>
    </Container>
  );
};

export default CommentForm;
