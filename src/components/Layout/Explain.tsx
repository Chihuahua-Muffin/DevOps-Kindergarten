import React from 'react';
import { useRouter } from 'next/router';
import { VStack } from '@chakra-ui/react';

import CommentList from '#/components/UI/organisms/CommentList';
import ExplainContainer from '#/components/UI/organisms/ExplainContainer';

interface LayoutProps {
  children: React.ReactNode;
}

// 모든 페이지에 적용되는 컴포넌트
const ExplainLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const { pathname } = router;
  console.log('현재 페이지:', pathname); // eslint-disable-line
  return (
    <VStack spacing={10}>
      <ExplainContainer>
        {children}
      </ExplainContainer>
      {/* Todo: 코멘트s API 완성되면 list에 페이지 정보 넘겨야 함 */}
      <CommentList />
    </VStack>
  );
};

export default ExplainLayout;
