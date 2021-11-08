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
          Jira에 대한 설명입니다.
        </>
      )}
      features={['Jira의 1번 특징', 'Jira의 2번 특징', 'Jira의 3번 특징']}
    />
    <ExplainTool
      title="Git"
      src="/git.png"
      titleHref="https://git-scm.com/"
      explaination={(
        <>
          Git에 대한 설명입니다.
        </>
      )}
      features={['Git의 1번 특징', 'Git의 2번 특징', 'Git의 3번 특징']}
    />
  </>
);

PlanPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default PlanPage;
