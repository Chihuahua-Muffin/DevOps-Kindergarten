import React from 'react';
import { useRouter } from 'next/router';
import { chakra, Box } from '@chakra-ui/react';

import CommentList from '#/components/common/comment/CommentList';
import CommentForm from '#/components/common/comment/CommentForm';
import ExplainContainer from '#/components/explain/ExplainContainer';

interface LayoutProps {
  children: React.ReactNode;
}

// 이론 설명 페이지의 전체 컨테이너 아래 여백
const ContainerStack = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '100px',
  },
});

// 모든 페이지에 적용되는 컴포넌트
const ExplainLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { pathname } = router;
  console.log('현재 페이지:', pathname); // eslint-disable-line
  return (
    <ContainerStack spacing={10}>
      <ExplainContainer>
        {children}
      </ExplainContainer>
      <CommentForm />
      {/* Todo: 코멘트s API 완성되면 list에 페이지 정보 넘겨야 함 */}
      <CommentList />
    </ContainerStack>
  );
};

export default ExplainLayout;
