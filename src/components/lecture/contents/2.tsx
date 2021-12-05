/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Code } from '@chakra-ui/react';

import SliderItem from '../slider/SliderItem';
import SliderItemHeader from '../slider/SliderItemHeader';
import SliderItemContentText from '../slider/SliderItemContentText';
import CodeBox from '#/components/common/codeBox/CodeBox';

export const lectureNumber = 2;
export const Title = '도커 설치';

const SLIDE1_TITLE = '패키지 및 패키지 캐시를 업데이트';
const SLIDE2_TITLE = '최신 도커엔진을 설치';
const SLIDE3_TITLE = '도커 실행';
const SLIDE4_TITLE = '도커 설치 확인';

export const Checkpoints = [
  {
    name: SLIDE1_TITLE,
    commands: ['sudo yum update -y'],
  },
  {
    name: SLIDE2_TITLE,
    commands: ['sudo amazon-linux-extras install docker'],
  },
  {
    name: SLIDE3_TITLE,
    commands: [
      'sudo service docker start',
      'sudo usermod -a -G docker ec2-user',
    ],
  },
  {
    name: SLIDE4_TITLE,
    commands: ['docker info', 'docker --version'],
  },
];

const Slide1 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE1_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      제공되는 환경에 Docker를 설치합니다.<br />
      제공되는 환경의 OS는 aws-linux2입니다. aws-linux2란 aws에서 제공하는 redhat 기반 linux입니다.<br />
      linux에 대해 잘 모르신다면 Windows, MacOS와 마찬가지로 OS의 일종이지만,<br />
      마우스를 사용하지 않고 키보드로만 조작할 수 있는 환경 정도로 생각하시면 되겠습니다. <br />
      (물론 linux 버전에 따라 그래픽 환경이 제공되는 경우도 있습니다.)
    </SliderItemContentText>
    <SliderItemContentText>
      우선 <Code>sudo yum update -y</Code> 명령어를 통해 패키지 및 패키지 캐시를 업데이트 합니다.
      <br />
    </SliderItemContentText>
    <CodeBox text="sudo yum update -y" />
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE2_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>sudo amazon-linux-extras install docker</Code> 명령어를 통해서 최신 도커엔진을 설치합니다.
    </SliderItemContentText>
    <CodeBox text="sudo amazon-linux-extras install docker" />
    <SliderItemContentText>
      설치 중간에 다음과 같은 문구가 나온다면, y를 눌러 설치를 수락합니다.
    </SliderItemContentText>
    <img
      src="/lecture/2/checkOk.png"
      alt="check ok"
    />
  </SliderItem>
);

const Slide3 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE3_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>sudo service docker start</Code>를 입력하여 도커를 실행합니다.
    </SliderItemContentText>
    <CodeBox text="sudo service docker start" />
    <SliderItemContentText>
      <Code>sudo usermod -a -G docker ec2-user</Code>를 입력해 관리자 권한이 아니더라도 항상 실행할 수 있도록 권한을 추가합니다.
    </SliderItemContentText>
    <CodeBox text="sudo usermod -a -G docker ec2-user" />
    <SliderItemContentText>
      이후에 수정한 권한이 적용되도록 새로고침해 터미널 환경을 리로드합니다. 일반 유저 권한으로도 실행할 수 있는지 확인합니다.
    </SliderItemContentText>
  </SliderItem>
);

const Slide4 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE4_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>docker info</Code>를 입력해 도커의 정보를 확인합니다. 아래와 같은 문구가 나오면 성공적입니다.
      <CodeBox text="docker info" />
      <img
        src="/lecture/2/dockerInfo.png"
        alt="docker info"
      />
    </SliderItemContentText>
    <SliderItemContentText>
      마지막으로 <Code>docker --version</Code>을 입력해 도커가 제대로 설치됐는지 버전을 체크합니다. <br />
      다음과 같은 문구가 나오면 제대로 성공한 것입니다.
      <CodeBox text="docker --version" />
      <img
        src="/lecture/2/dockerVersion.png"
        alt="docker version"
      />
    </SliderItemContentText>
  </SliderItem>
);

export default [
  {
    slideId: 1,
    content: <Slide1 />,
  },
  {
    slideId: 2,
    content: <Slide2 />,
  },
  {
    slideId: 3,
    content: <Slide3 />,
  },
  {
    slideId: 4,
    content: <Slide4 />,
  },
];
