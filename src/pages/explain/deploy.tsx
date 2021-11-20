import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const DeployPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="deploy">Deploy</ExplainTitle>
    <ExplainContent>
      제품 릴리즈를 운영 환경으로 관리, 조정, 예약 및 자동화하는 단계입니다.
    </ExplainContent>

    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainTool
      title="Docker"
      src="/docker.png"
      titleHref="https://www.docker.com/"
      explaination={(
        <>
          Docker는 애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼입니다.
          Docker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며 코드가 문제없이 실행될 것임을 확신할 수 있습니다.
        </>
      )}
      features={['컨테이너', '환경 표준화', '데이터 처리', '패키징']}
    />

    <ExplainTool
      title="AWS"
      src="/aws.png"
      titleHref="https://aws.amazon.com/"
      explaination={(
        <>
          클라우드 서비스는 사용자의 직접적인 관리 없이 시스템 리소스를 필요 시 바로 제공하는 서비스를 말합니다.
          대표적인 제품에는 AWS가 있습니다.
        </>
      )}
      features={['on-demand', 'SaaS', 'PaaS', 'IaaS']}
    />
  </>
);

DeployPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default DeployPage;
