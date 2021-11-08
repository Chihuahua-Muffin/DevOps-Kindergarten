import React, { useEffect } from 'react';
import { chakra, Box, useMediaQuery } from '@chakra-ui/react';

import Terminal from '#/components/lecture/terminal/Terminal';
import Sidebar from '#/components/lecture/sidebar/Sidebar';
import type { Checkpoint } from '#/components/lecture/contents/types';
import { MIN_WIDTH_1100 } from '#/constants';
import { useAppDispatch, useAppSelector } from '#/hooks/useRedux';
import { initialClearAndSlideCount, reset } from '#/redux/ducks/lecture';

interface LayoutProps {
  children: React.ReactNode;
  checkpoints: Checkpoint[];
  lectureNumber: number;
  title: string;
}

// 이론 설명 페이지의 전체 컨테이너 아래 여백
const LectureContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '70vh',
    paddingLeft: '300px',
    overflowY: 'auto',
  },
});

const SmallLectureContainer = chakra(LectureContainer, {
  baseStyle: {
    paddingLeft: '70px',
  },
});

// 모든 페이지에 적용되는 컴포넌트
const LectureLayout = ({ children, checkpoints, title, lectureNumber }: LayoutProps) => {
  const [isLargerThan1100] = useMediaQuery(MIN_WIDTH_1100);
  const dispatch = useAppDispatch();
  const { lectureProgress } = useAppSelector((state) => state.user);

  // 현재 진행도에 따라 슬라이드를 넘겨주는 로직
  useEffect(() => {
    dispatch(reset());
    const { count } = lectureProgress[lectureNumber];
    dispatch(initialClearAndSlideCount(count));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, lectureNumber, lectureProgress]);

  return (
    <>
      <Sidebar title={title} checkpoints={checkpoints} />
      {isLargerThan1100 ? (
        <LectureContainer>{children}</LectureContainer>
      ) : (
        <SmallLectureContainer>{children}</SmallLectureContainer>
      )}
      <Terminal />
    </>
  );
};

export default LectureLayout;
