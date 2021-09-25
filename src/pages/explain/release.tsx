import React from 'react';

import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainSubTitle from '#/components/explain/ExplainSubTitle';
import ExplainContent from '#/components/explain/ExplainContent';

// ExplainTitle     : h1
// ExplainSubTitle  : h2   /#{id} 이런식으로 들어감
// ExplainContent   : p

const ReleasePage = () => (
  <>
    <ExplainTitle>RELEASE</ExplainTitle>
    <ExplainContent>
      RELEASE?
    </ExplainContent>
    <ExplainSubTitle id="tools">Tools</ExplainSubTitle>
    <ExplainContent>
      대표 툴에 대한 설명
    </ExplainContent>
  </>
);

ReleasePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default ReleasePage;
