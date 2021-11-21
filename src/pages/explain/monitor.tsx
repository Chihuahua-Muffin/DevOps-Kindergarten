import React from 'react';

import TableOfContents from '#/components/explain/ExplainTableOfContents';
import ExplainLayout from '#/components/layouts/Explain';

import ExplainTitle from '#/components/explain/ExplainTitle';
import ExplainContent from '#/components/explain/ExplainContent';
import ExplainTool from '#/components/explain/ExplainTool';

const MonitorPage = () => (
  <>
    <TableOfContents />
    <ExplainTitle id="monitor">Monitor</ExplainTitle>
    <ExplainContent>
      운영 중인 특정 소프트웨어가 가진 문제에 대한 정보를 식별하고 수집하는 단계입니다.
    </ExplainContent>

    <ExplainTitle id="tools">Tools</ExplainTitle>
    <ExplainTool
      title="Prometheus"
      src="/prometheus.png"
      titleHref="https://prometheus.io/"
      explaination={(
        <>
          프로메테우스(Prometheus)는 오픈소스 기반의 모니터링 시스템입니다. 대상 시스템으로부터 각종 모니터링 지표를 수집하여 검색하고 검색할 수 있습니다.
        </>
      )}
      features={['메트릭(데이터) 수집', '메트릭 저장, 전송']}
    />
    <ExplainTool
      title="Grafana"
      src="/grafana.png"
      titleHref="https://grafana.com/"
      explaination={(
        <>
          그라파나(Grafana)는 메트릭 데이터 시각화 도구로 메트릭 분석 플랫폼을 지향하는 오픈소스 도구입니다.
        </>
      )}
      features={['매트릭 데이터 시각화', '대시보드 구성']}
    />
  </>
);

MonitorPage.getLayout = (page: React.ReactElement) => (
  <ExplainLayout>
    {page}
  </ExplainLayout>
);

export default MonitorPage;
