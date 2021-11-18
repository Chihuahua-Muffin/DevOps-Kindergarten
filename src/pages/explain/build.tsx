import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';

const BuildPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="build">Build</ExplainTitle>
    <ExplainContent>
      BUILD?
    </ExplainContent>
    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainContent>
      대표 툴에 대한 설명
    </ExplainContent>
  </>
);

BuildPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default BuildPage;
