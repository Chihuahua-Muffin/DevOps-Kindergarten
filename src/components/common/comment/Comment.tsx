import React, {
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  chakra,
  Box,
  Text,
  Avatar,
  Button,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import RecommentForm from './RecommentForm';

import { CONTENT_WIDTH } from '#/constants';

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
    width: '100%',
    columnGap: '15px',
    padding: '10px',
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
    fontSize: '15px',
    fontWeight: '600',
    color: 'gray.800',
  },
});

// 유저 댓글 생성 날짜
const CreatedAt = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
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
const CommentText = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    padding: '10px',
  },
});

// 하단 컨테이너
const BottomContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '5px 10px', // 상하 좌우
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
    columnGap: '10px',
    alignItems: 'center',
  },
});

// 좋아요 수
const LikeCount = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'gray.500',
  },
});

const Comment = () => {
  const [isRecommentVisible, setIsRecommentVisible] = useState(false);
  const [recommentButtonText, setRecommentButtonText] = useState('답글 달기');
  // To do : 추후에 사용자가 좋아요를 클릭했는지 안했는지에 따라 기본값이 바뀌도록 바꿔야함
  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(false);
  // To do : 데이터베이스에서 좋아요 수를 받아와야 함
  const [likeCount, setLikeCount] = useState(0);

  const openRecommentFormHandler = useCallback(() => {
    setIsRecommentVisible(!isRecommentVisible);
    if (isRecommentVisible) {
      setRecommentButtonText('답글 달기');
    } else {
      setRecommentButtonText('취소');
    }
  }, [isRecommentVisible]);

  const recommentButtonColor = useMemo(() => (isRecommentVisible ? 'teal' : 'gray'), [isRecommentVisible]);

  const likeButtonClickHandler = useCallback(() => {
    setIsLikeButtonClicked(!isLikeButtonClicked);
    if (isLikeButtonClicked) {
      // To do: 데이터베이스에 좋아요가 하나 감소하는 로직 추가
      setLikeCount(likeCount - 1);
    } else {
      // To do: 데이터베이스에 좋아요가 하나 증가하는 로직 추가
      setLikeCount(likeCount + 1);
    }
  }, [isLikeButtonClicked, likeCount]);

  // To do: 백엔드 연결되면 바꾸기
  const likeButtonColor = useMemo(() => (isLikeButtonClicked ? 'teal' : 'gray'), [isLikeButtonClicked]);

  return (
    <CommentContainer>
      <Divider />
      <TopContainer>
        <Thumbnail bg="teal.500" size="md" />
        <UserDataContainer>
          <UserName>유저이름</UserName>
          <CreatedAt>생성날짜</CreatedAt>
        </UserDataContainer>
      </TopContainer>
      <MidContainer>
        <CommentText>유저 댓글 내용</CommentText>
      </MidContainer>
      <BottomContainer>
        <ButtonContainer>
          <IconButton
            aria-label="Like"
            size="sm"
            icon={<ThumbUpAltIcon />}
            colorScheme={likeButtonColor}
            onClick={likeButtonClickHandler}
            name="likeButton"
          />
          <LikeCount name="likeCount">{likeCount}</LikeCount>
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

export default Comment;
