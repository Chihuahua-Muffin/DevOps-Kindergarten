import React, { useState, useCallback, useMemo } from 'react';
import { chakra, Box, Text, Avatar, Button, Divider, Spacer, Textarea } from '@chakra-ui/react';
import moment from 'moment';

import { useAppSelector } from '#/hooks/useRedux';
import type { Comment } from '#/types';
import RecommentForm from './RecommentForm';
import { CONTENT_WIDTH } from '#/constants';
import DeleteModalButton from './DeleteModalButton';
import ModifyModalButton from './ModifyModalButton';

// 전체 컨테이너
const CommentContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: CONTENT_WIDTH,
  },
});

// 상단 컨테이너
const TopContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    marginTop: '1rem',
    width: '100%',
    columnGap: '1rem',
    padding: '0.6rem',
    alignItems: 'center',
  },
});

// 유저 썸네일
const Thumbnail = chakra(Avatar, {
  baseStyle: {
  },
});

// 유저 정보 컨테이너
const UserDataContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
});

// 유저 이름
const UserName = chakra(Text, {
  baseStyle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'gray.800',
  },
});

// 유저 댓글 생성 날짜
const CreatedAt = chakra(Text, {
  baseStyle: {
    fontSize: '0.8rem',
    fontWeight: '200',
    color: 'gary.500',
  },
});

// 중단 댓글 컨테이너
const MidContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    width: '100%',
  },
});

// 유저 댓글
const CommentText = chakra(Textarea, {
  baseStyle: {
    fontSize: '1rem',
    padding: '0.6rem',
  },
});

// 하단 컨테이너
const BottomContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0.4rem 0.6rem', // 상하 좌우
  },
});

// 답글 버튼
const RecommentButton = chakra(Button, {
  baseStyle: {
  },
});

// 버튼 컨테이너
const ButtonContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    columnGap: '0.6rem',
    alignItems: 'center',
  },
});

interface ItemProps {
  getCommentList: () => Promise<void>;
  commentId: number;
  content: string;
  username: string;
  createdDate: string;
  updatedDate: string;
  recommentList: Comment[];
}

const CommentItem = ({
  commentId,
  content,
  username,
  createdDate,
  updatedDate,
  recommentList,
  getCommentList,
}: ItemProps) => {
  const authState = useAppSelector((state) => state.auth);
  const [isRecommentVisible, setIsRecommentVisible] = useState(false);
  const [recommentButtonText, setRecommentButtonText] = useState('답글 달기');

  const openRecommentFormHandler = useCallback(() => {
    setIsRecommentVisible(!isRecommentVisible);
    if (isRecommentVisible) {
      setRecommentButtonText('답글 달기');
    } else {
      setRecommentButtonText('취소');
    }
  }, [isRecommentVisible]);

  const recommentButtonColor = useMemo(() => (isRecommentVisible ? 'teal' : 'gray'), [isRecommentVisible]);
  const commentData = useMemo(() => {
    if (updatedDate === createdDate) return moment(createdDate).format('YYYY-MM-DD Ahh:mm');
    return `${moment(updatedDate).format('YYYY-MM-DD Ahh:mm')} 수정됨`;
  }, [createdDate, updatedDate]);

  return (
    <CommentContainer>
      <Divider />
      <TopContainer>
        <Thumbnail bg="teal.500" size="md" />
        <UserDataContainer>
          <UserName>{username}</UserName>
          <CreatedAt>{commentData}</CreatedAt>
        </UserDataContainer>
        <Spacer />
        {(authState.isLogin && authState.username === username)
          && (
            <>
              <ModifyModalButton
                getCommentList={getCommentList}
                commentId={commentId}
                content={content}
              />
              <DeleteModalButton
                getCommentList={getCommentList}
                commentId={commentId}
              />
            </>
          )}
      </TopContainer>
      <MidContainer>
        <CommentText
          isReadOnly
          value={content}
          variant="unstyled"
        />
      </MidContainer>
      <BottomContainer>
        <ButtonContainer>
          {/* <IconButton
            aria-label="Like"
            size="sm"
            icon={<ThumbUpAltIcon />}
            colorScheme={likeButtonColor}
            onClick={likeButtonClickHandler}
            name="likeButton"
          />
          <LikeCount name="likeCount">{likeCount}</LikeCount> */}
        </ButtonContainer>
        <RecommentButton
          colorScheme={recommentButtonColor}
          onClick={openRecommentFormHandler}
          size="sm"
          name="recommentButton"
        >
          {recommentButtonText}
        </RecommentButton>
      </BottomContainer>
      {isRecommentVisible && <RecommentForm />}
    </CommentContainer>
  );
};

export default CommentItem;
