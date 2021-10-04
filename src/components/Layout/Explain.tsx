import React from 'react';
import { useRouter } from 'next/router';
import { VStack } from '@chakra-ui/react';

<<<<<<< HEAD:src/components/layouts/Explain.tsx
import CommentList from '#/components/common/comment/CommentList';
import ExplainContainer from '#/components/explain/ExplainContainer';
=======
import CommentList from '#/components/UI/organisms/CommentList';
import ExplainContainer from '#/components/UI/organisms/ExplainContainer';
>>>>>>> parent of dc475a7 (TableOfContents 생성 & 댓글 생성 폼 생성 & 이론 페이지 Tool 컴포넌트 생성 (#68)):src/components/Layout/Explain.tsx

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
