import React from 'react';

import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';

const CodePage = () => (
  <>
    <ExplainTitle id="code">Code</ExplainTitle>
    <ExplainContent>
      CODE?
    </ExplainContent>
    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainContent>
      대표 툴에 대한 설명
    </ExplainContent>
  </>
);

CodePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default CodePage;
