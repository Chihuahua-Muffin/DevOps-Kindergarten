import React from 'react';

import ExplainContainer from '#/components/explain/ExplainContainer';

interface LayoutProps {
  children: React.ReactNode;
}

// 모든 페이지에 적용되는 컴포넌트
const ExplainLayout = ({ children }: LayoutProps) => {
  const contents = 'explain contents';
  return (
    <ExplainContainer>
      {children}
      hi
    </ExplainContainer>
  );
};

export default ExplainLayout;
