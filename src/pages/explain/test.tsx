/* eslint-disable max-len */
import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const TestPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="Test">Test</ExplainTitle>
    <ExplainContent>
      빌드한 기능이 문제가 없는지 테스트를 합니다. 요구사항에 따라 계획한 기능을 충실하게 수행하는지 검증하는 테스트를 수행합니다.
    </ExplainContent>
    <ExplainTitle id="Tools">Tools</ExplainTitle>
    <ExplainTool
      title="Junit"
      src="/junit.png"
      titleHref="https://junit.org/junit5/"
      explaination={(
        <>
          JUnit(제이유닛)은 자바 프로그래밍 언어용 유닛 테스트 프레임워크입니다. JUnit은 테스트 주도 개발 면에서 중요하며 SUnit과 함께 시작된 XUnit이라는 이름의 유닛 테스트 프레임워크 계열의 하나입니다.
        </>
      )}
      features={['어노테이션으로 간결하게 지원함', '단정문으로 테스트 케이스의 수행 결과를 판별함', '문자 혹은 GUI 기반으로 실행됨']}
    />
    <ExplainTool
      title="Selenium"
      src="/selenium.png"
      titleHref="https://www.selenium.dev/"
      explaination={(
        <>
          셀레늄(Selenium)은 웹 애플리케이션 테스트를 위한 포터블 프레임워크입니다. 셀레늄은 테스트 스크립트 언어를 학습할 필요 없이 기능 테스트를 만들기 위한 플레이백 도구를 제공합니다. C#, Groovy, 자바, PHP, 파이썬, 루비, 스칼라 등 수많은 유명 프로그래밍 언어들에서 테스트를 작성하기 위한 테스트 도메인 특화 언어(Selenese)를 제공합니다.
        </>
      )}
      features={['매우 단순한 사용법', '다채로운 프로그래밍 언어 지원']}
    />
  </>
);

TestPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default TestPage;
