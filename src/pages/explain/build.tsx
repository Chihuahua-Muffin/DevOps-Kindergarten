import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const BuildPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="Build">Build</ExplainTitle>
    <ExplainContent>
      작성이 완료된 코드를 정적 분석 및 보안 분석을 수행하고 빌드하는 단계입니다.
      자동화 도구로 빌드하여 문제가 없는지 주기적으로 확인합니다.
    </ExplainContent>
    <ExplainTitle id="Tools">Tools</ExplainTitle>
    <ExplainTool
      title="Gradle"
      src="/gradle.png"
      titleHref="https://gradle.org/"
      explaination={(
        <>
          {/* eslint-disable-next-line max-len */}
          Gradle은 그루비를 이용한 빌드 자동화 시스템입니다. Groovy와 유사한 도메인 언어를 채용하였으며, 현재 안드로이드 앱을 만드는데 필요한 안드로이드 스튜디오의 공식 빌드 시스템이기도 합니다. Java, C/C++, 파이썬 등과 같은 여러 가지 언어를 지원하고 있습니다.
        </>
      )}
      features={['멀티 프로젝트 빌드 지원', '의존성 관리의 다양한 방법 제공', '기존 Build를 구성하기 위한 풍부한 도메인 모델 제공']}
    />
    <ExplainTool
      title="Maven"
      src="/maven.png"
      titleHref="https://maven.apache.org/"
      explaination={(
        <>
          {/* eslint-disable-next-line max-len */}
          아파치 메이븐(Apache Maven)은 자바용 프로젝트 관리 도구입니다. 프로젝트 빌드(컴파일, 테스트, 패키징), 배포, 문서 등에 대한 일관된 표준과 업무를 수행하는데 필요한 다양한 기능을 제공합니다.
        </>
      )}
      features={['간단한 설정을 통한 배포 관리가 가능', '핵심 라이브러리와 의존 라이브러리의 관리가 편리', 'Maven의 다양한 플러그인을 활용 가능']}
    />
  </>
);

BuildPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default BuildPage;
