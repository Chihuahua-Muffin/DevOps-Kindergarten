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
          지라(JIRA)는 아틀라시안이 개발한 사유 이슈 추적 제품이다. 버그 추적, 이슈 추적, 프로젝트 관리 기능을 제공하는 소프트웨어입니다.
        </>
      )}
      features={['스크럼 보드 제공', '칸반 보드 제공', '애자일 보고', '버그 및 이슈 트랙커 기능']}
    />
    <ExplainTool
      title="Git"
      src="/git.png"
      titleHref="https://git-scm.com/"
      explaination={(
        <>
          깃(Git /ɡɪt/)은 컴퓨터 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템입니다.
          소프트웨어 개발에서 소스 코드 관리에 주로 사용되지만 어떠한 집합의 파일의 변경사항을 지속적으로 추적하기 위해 사용될 수 있습니다.
          기하학적 불변 이론을 바탕으로 설계됐고, 분산 버전 관리 시스템으로서 빠른 수행 속도에 중점을 두고 있는 것이 특징이며
          데이터 무결성, 분산, 비선형 워크플로를 지원합니다.
        </>
      )}
      features={['가지 치기(Branch)와 병합(Merge)', '가볍고 빠르다', '분산 작업', '데이터 보장', '준비 영역(Staging area)', '오픈 소스']}
    />
  </>
);

PlanPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default PlanPage;
