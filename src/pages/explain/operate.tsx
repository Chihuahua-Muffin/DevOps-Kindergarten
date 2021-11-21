import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const OperatePage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="operate">Operate</ExplainTitle>
    <ExplainContent>
      배포중인 서비스에 대한 유지 관리를 수행합니다. 시스템에 대한 안정성과 고가용성을 보장하고 서버가 다운되는 일을 방지하는 단계입니다.
    </ExplainContent>
    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainTool
      title="Kubernetes"
      src="/kubernetes.png"
      titleHref="https://kubernetes.io/ko/"
      explaination={(
        <>
          쿠버네티스(Kubernetes)는 컨테이너화된 워크로드와 서비스를 관리하기 위한 오픈소스 플랫폼입니다.
          쿠버네티스는 이식성과 확장성이 좋고, 구성과 자동화를 용이하게 해줍니다.
        </>
      )}
      features={['서비스 탐색, 로드 밸런싱', '스토리지 오케스트레이션', '자동 롤아웃, 롤백', '자동 빈 패킹, 복구', '보안 구성 관리']}
    />
    <ExplainTool
      title="Terraform"
      src="/terraform.png"
      titleHref="https://www.terraform.io/"
      explaination={(
        <>
          테라폼(Terraform)은 클라우드 인프라스트럭처 자동화를 지향하는 Infrastructure as Code, IaC 오픈소스 도구입니다.
          테라폼은 AWS, GCP, Azure와 같은 주요 클라우드 서비스를 비롯한 다양한 클라우드 서비스들을 제공하며
          테라폼만으로 멀티 클라우드의 리소스들을 선언하고 코드로 관리하는 게 가능합니다.
        </>
      )}
      features={['IaC', '인프라 설정 계획', '인프라 구축 자동화']}
    />
  </>
);

OperatePage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default OperatePage;
