import React from 'react';
import { useRouter } from 'next/router';
import { chakra, Box } from '@chakra-ui/react';
import Terminal from '#/components/lecture/terminal/Terminal';

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
    marginBottom: '100px',
  },
});

// 모든 페이지에 적용되는 컴포넌트
const LectureLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { pathname } = router;
  console.log('현재 페이지:', pathname); // eslint-disable-line
  return (
    <>
      <LectureContainer>
        {children}
      </LectureContainer>
      <Terminal />
    </>
  );
};

export default LectureLayout;
