import React from 'react';

import ExplainLayout from '#/components/Layout/Explain';

import ExplainTitle from '#/components/UI/atomics/TitleText';
import ExplainSubTitle from '#/components/UI/atomics/SubtitleText';
import ExplainContent from '#/components/UI/atomics/ContentText';

// ExplainTitle     : h1
// ExplainSubTitle  : h2   /#{id} 이런식으로 들어감
// ExplainContent   : p

const CodePage = () => (
  <>
    <ExplainTitle>CODE</ExplainTitle>
    <ExplainContent>
      CODE?
    </ExplainContent>
    <ExplainSubTitle id="tools">Tools</ExplainSubTitle>
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
