import React from 'react';
import { chakra, Box, useMediaQuery } from '@chakra-ui/react';

import Terminal from '#/components/lecture/terminal/Terminal';
import Sidebar from '#/components/lecture/sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
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
    paddingLeft: '0px',
  },
});

// 모든 페이지에 적용되는 컴포넌트
const LectureLayout = ({ children }: LayoutProps) => {
  const [isLargerThan1100] = useMediaQuery('(min-width: 1100px)');

  return (
    <>
      {isLargerThan1100 ? <Sidebar /> : ''}
      {
        isLargerThan1100 ? (
          <LectureContainer>
            {children}
          </LectureContainer>
        ) : (
          <SmallLectureContainer>
            {children}
          </SmallLectureContainer>
        )
      }
      <Terminal />
    </>
  );
};

export default LectureLayout;
