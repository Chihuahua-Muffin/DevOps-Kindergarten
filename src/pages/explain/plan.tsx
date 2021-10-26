import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const PlanPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="Plan">Plan</ExplainTitle>
    <ExplainContent>
      프로젝트의 사업 가치와 요구사항들을 정의하는 중요한 단계입니다.
    </ExplainContent>

    <ExplainTitle id="Tools">Tools</ExplainTitle>
    <ExplainTool
      title="Jira"
      src="/jira.jpeg"
      titleHref="https://www.atlassian.com/software/jira"
      explaination={(
        <>
          Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다.
          Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다.
        </>
      )}
      features={['아주 좋아요', '아주 섹시해요', '아주 어썸해요']}
    />
    <ExplainTool
      title="Git"
      src="/git.png"
      titleHref="https://git-scm.com/"
      explaination={(
        <>
          Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다.
          Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다. Jira는 이러이러한 툴입니다.
        </>
      )}
      features={['1', '2', '3']}
    />
  </>
);

PlanPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default PlanPage;
