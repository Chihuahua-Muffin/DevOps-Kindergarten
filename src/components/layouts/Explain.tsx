import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { chakra, Box } from '@chakra-ui/react';
import type { AxiosResponse } from 'axios';

import type { Comment } from '#/types';
import { getCommentsAPI } from '#/lib/api/comment';
import { EXPLAIN_PAGE_LIST } from '#/constants';
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

// 모든 Explain(이론) 페이지에 적용되는 컴포넌트
const ExplainLayout = ({ children }: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [commentList, setCommentList] = useState<any>([]);
  const router = useRouter();
  const { pathname } = router;
  const pageName = useMemo(() => pathname.split('/')[2], [pathname]);
  const getPageName = useMemo(() => (EXPLAIN_PAGE_LIST.includes(pageName) ? pageName : ''), [pageName]);

  const getCommentList = useCallback(async () => {
    const pageInfo = {
      pageId: null, // Explan layout에서는 pageId를 받을 일이 없음
      pageName: getPageName,
    };

    const getData: AxiosResponse<Comment[]> = await getCommentsAPI(pageInfo);
    console.log('getData', getData.data);

    setCommentList(getData.data);
  }, [getPageName]);

  useEffect(() => {
    getCommentList();
  }, [getCommentList]);

  return (
    <ContainerStack spacing={10}>
      <ExplainContainer>
        {children}
      </ExplainContainer>
      <CommentForm getCommentList={getCommentList} />
      <CommentList getCommentList={getCommentList} commentList={commentList} />
    </ContainerStack>
  );
};

export default ExplainLayout;
