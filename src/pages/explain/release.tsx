/* eslint-disable max-len */
import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const ReleasePage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="Release">Release</ExplainTitle>
    <ExplainContent>
      완성된 결과물을 개발서버나 품질서버에 이관하는 단계입니다.
    </ExplainContent>
    <ExplainTitle id="Tools">Tools</ExplainTitle>
    <ExplainTool
      title="Jenkins"
      src="/jenkins.png"
      titleHref="https://www.jenkins.io/"
      explaination={(
        <>
          젠킨스(Jenkins)는 소프트웨어 개발 시 지속적 통합(continuous integration) 서비스를 제공하는 툴입니다. 다수의 개발자들이 하나의 프로그램을 개발할 때 버전 충돌을 방지하기 위해 각자 작업한 내용을 공유 영역에 있는 Git등의 저장소에 빈번히 업로드함으로써 지속적 통합이 가능하도록 해 줍니다.
        </>
      )}
      features={['정기적인 빌드 자동화', '동시에 여러 프로젝트 빌드 가능', '다양한 플러그인으로 기능 확장', '코딩 룰 체크 및 정적분석']}
    />
    <ExplainTool
      title="Travis CI"
      src="/travisci.jpeg"
      titleHref="https://www.travis-ci.com/"
      explaination={(
        <>
          Travis CI는 호스팅 지속적 통합(CI) 서비스의 하나로, 깃허브에 호스팅되는 소프트웨어 프로젝트의 빌드, 테스트를 위해 사용됩니다.
        </>
      )}
      features={['빌드 과정을 한 눈에 이해하기 쉬움', 'Cron 빌드를 지원', '캐시 적중률 문제가 덜하므로 빌드 시간이 좀 더 안정적으로 유지됨']}
    />
  </>
);

ReleasePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default ReleasePage;
