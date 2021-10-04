import React from 'react';

import ExplainLayout from '#/components/Layout/Explain';

<<<<<<< HEAD
import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainSubTitle from '#/components/explain/ExplainSubTitle';
import ExplainContent from '#/components/explain/ExplainContent';
=======
import ExplainTitle from '#/components/UI/atomics/TitleText';
import ExplainSubTitle from '#/components/UI/atomics/SubtitleText';
import ExplainContent from '#/components/UI/atomics/ContentText';

// ExplainTitle     : h1
// ExplainSubTitle  : h2   /#{id} 이런식으로 들어감
// ExplainContent   : p
>>>>>>> parent of dc475a7 (TableOfContents 생성 & 댓글 생성 폼 생성 & 이론 페이지 Tool 컴포넌트 생성 (#68))

// ExplainTitle     : h1
// ExplainSubTitle  : h2   /#{id} 이런식으로 들어감
// ExplainContent   : p

const BuildPage = () => (
  <>
    <ExplainTitle>BUILD</ExplainTitle>
    <ExplainContent>
      BUILD?
    </ExplainContent>
    <ExplainSubTitle id="tools">Tools</ExplainSubTitle>
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
