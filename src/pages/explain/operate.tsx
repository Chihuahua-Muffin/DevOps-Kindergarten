import React from 'react';

import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';

const OperatePage = () => (
  <>
    <ExplainTitle id="operate">Operate</ExplainTitle>
    <ExplainContent>
      OPERATE?
    </ExplainContent>
    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainContent>
      대표 툴에 대한 설명
    </ExplainContent>
  </>
);

OperatePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default OperatePage;
