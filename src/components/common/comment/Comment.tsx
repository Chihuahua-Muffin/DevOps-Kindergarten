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
import RecommentForm from './RecommentForm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

// 전체 컨테이너
const CommentContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
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

  const openRecommentForm = useCallback(() => {
    setIsRecommentVisible(!isRecommentVisible);
    if(isRecommentVisible) {
      setRecommentButtonText('답글 달기');
    } else {
      setRecommentButtonText('취소');
    }
  }, [isRecommentVisible]);

  const recommentButtonColor = useMemo(() =>
    isRecommentVisible ? 'teal' : 'gray', [isRecommentVisible],
  ); 

  return (
    <CommentContainer>
      <Divider />
      <TopContainer>
        <Thumbnail bg="teal.500" size="md" />
        <UserDataContainer>
          <UserName>
            유저이름
          </UserName>
          <CreatedAt>
            생성날짜
          </CreatedAt>
        </UserDataContainer>
      </TopContainer>
      <MidContainer>
        <CommentText>
          유저 댓글 내용
        </CommentText>
      </MidContainer>
      <BottomContainer>
        <ButtonContainer>
          <IconButton
            aria-label="Like"
            size="sm"
            icon={<ThumbUpAltIcon />}
          />
          <LikeCount>
            10
          </LikeCount>
        </ButtonContainer>
        <RecommentButton colorScheme={recommentButtonColor} onClick={openRecommentForm} size="sm">
          {recommentButtonText}
        </RecommentButton>
      </BottomContainer>
      {isRecommentVisible && <RecommentForm />}
    </CommentContainer>
  );
};

export default Comment;
