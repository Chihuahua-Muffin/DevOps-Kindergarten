import React from 'react';
import { chakra, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

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

const DynamicTerminal = dynamic(() => import('#/components/lecture/terminal/Terminal'), {
  ssr: false,
});

// 모든 페이지에 적용되는 컴포넌트
const LectureLayout = ({ children }: LayoutProps) => (
  <>
    <LectureContainer>
      {children}
    </LectureContainer>
    <DynamicTerminal />
  </>
);

export default LectureLayout;
