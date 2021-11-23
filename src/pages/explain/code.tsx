import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';

const CodePage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="Code">Code</ExplainTitle>
    <ExplainContent>
      코드를 작성하여 버전 관리 시스템에 등록하고 관련 내용이나 스펙을 정리하여 함께 공유하는 단계입니다. 
      상황에 따라 신규로 Branch를 생성하거나 기존에 올려진 코드를 수정하거나 머지할 수 있습니다.
    </ExplainContent>
    <ExplainTitle id="Tools">Tools</ExplainTitle>
    <ExplainTool
      title="Visual Studio Code"
      src="/vscode.png"
      titleHref="https://code.visualstudio.com/"
      explaination={(
        <>
          비주얼 스튜디오 코드(Visual Studio Code)는 마이크로소프트가 마이크로소프트 윈도우, macOS, 리눅스용으로 개발한 소스 코드 편집기입니다. 
          디버깅 지원과 Git 제어, 구문 강조 기능등이 포함되어 있으며, 사용자가 편집기의 테마와 단축키, 설정 등을 수정할 수 있습니다.
        </>
      )}
      features={['다양한 운영체제 지원', '마이크로 소프트가 직접 배포하는 확장성']}
    />
  </>
);

CodePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default CodePage;
