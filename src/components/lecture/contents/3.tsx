/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Code } from '@chakra-ui/react';

import SliderItem from '../slider/SliderItem';
import SliderItemHeader from '../slider/SliderItemHeader';
import SliderItemContentText from '../slider/SliderItemContentText';
import CodeBox from '#/components/common/codeBox/CodeBox';

export const lectureNumber = 3;
export const Title = '도커로 MySQL 실행';

const SLIDE1_TITLE = '도커 이미지';
const SLIDE2_TITLE = '도커 이미지 설치와 컨테이너 실행';
const SLIDE3_TITLE = '컨테이너 접속';

export const Checkpoints = [
  {
    name: SLIDE1_TITLE,
    commands: [''],
  },
  {
    name: SLIDE2_TITLE,
    commands: [
      'docker run -i -t --name my_mysql -e MYSQL_ROOT_PASSWORD="root" -d mysql:5.7.30sudo amazon-linux-extras install docker',
      'docker ps',
    ],
  },
  {
    name: SLIDE3_TITLE,
    commands: [
      'docker exec -it my_mysql /bin/bash',
      'mysql -uroot -p',
      'root',
    ],
  },
];

const Slide1 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE1_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      이제 도커를 이용해 MySQL을 실행해보겠습니다. 도커를 실행할 때는 이미지와 컨테이너를 사용합니다.<br /><br />
      도커 이미지란 일종의 틀이고, 컨테이너란 그 틀을 이용해 찍어낸 빵 혹은 쿠키라고 생각할 수 있습니다. 우리는 붕어빵 틀을 이용해 붕어빵을 만들 수 있습니다.
      그리고 내용물에 따라 팥 붕어빵, 슈크림 붕어빵, 피자 붕어빵 등... 다양한 종류의 붕어빵을 만들 수 있습니다.
      그리고, 틀을 바꾼다면 빵이 아닌 쿠키로도 만들 수 있을 겁니다. 그 쿠키도 내용물에 따라 딸기맛 쿠키, 우유맛 쿠키, 용감한맛 쿠키 등 여러 종류의 쿠키가 됩니다.
      <br /><br />
      마찬가지로, 도커 이미지도 여러 종류가 있습니다. MySQL 이미지라는 틀을 이용해 서버라는 빵들을 찍어낼 수 있습니다.
      그리고 사용하는 용도에 따라 팥 붕어빵, 슈크림 붕어빵... 처럼 운영용 db 서버, 테스트용 db 서버, 백업용 db 서버 등의 여러 서버들을 개설할 수 있습니다.
      <br /><br />
      참고로, 도커 이미지 자체로는 사용할 수 없습니다. 우리가 빵을 먹지 틀을 먹지 않는 것과 같습니다.
    </SliderItemContentText>
    <Code>빈 칸으로 엔터를 눌러 요구사항을 완료하고 다음으로 넘어가세요.</Code>
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE2_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>docker run -i -t --name my_mysql -e MYSQL_ROOT_PASSWORD="root" -d mysql:5.7.30</Code>
      다음 명령어를 통해 MySQL:5.7.30 버전의 이미지를 설치 후, 바로 컨테이너로 만들어 실행하겠습니다.
      <CodeBox text={'docker run -i -t --name my_mysql -e MYSQL_ROOT_PASSWORD="root" -d mysql:5.7.30'} />
      <img
        src="/lecture/3/dockerRun.png"
        alt="docker run"
      />
    </SliderItemContentText>
    <SliderItemContentText>
      <Code>run</Code>은 이미지를 설치해 컨테이너로 만들어 바로 실행하겠다는 의미입니다.<br />
      <Code>-i -t</Code>는 실행한 컨테이너를 유저의 명령을 기다리며 실행을 유지하겠다는 의미입니다.<br />
      <Code>-t -t</Code>옵션을 넣지 않는다면, 컨테이너는 남아있는 명령이 없으므로 실행과 동시에 종료될 것입니다.<br />
      <Code>--name db001</Code>은 이 컨테이너를 my_mysql로 부르겠다는 의미입니다. 이제 우리는 db001로 해당 컨테이너를 호출할 수 잇습니다.<br />
      <Code>-e MYSQL_ROOT_PASSWORD="root"</Code>는 해당 mysql 컨테이너의 비밀번호를 root로 설정하겠다는 의미입니다. -e는 환경 변수 설정을 의미합니다.<br />
      <Code>-d</Code>는 백그라운드로 실행하겠다는 의미입니다. 이는 백신 프로그램이 보이지는 않지만, 컴퓨터에서 항상 실행되고 있는 것처럼 우리 눈에는 보이지 않는 곳에서 실행시키겠다는 의미입니다.<br />
    </SliderItemContentText>
    <SliderItemContentText>
      <br />
      <Code>docker ps</Code>를 입력해 컨테이너가 잘 실행되고 있는지 확인해봅시다.
    </SliderItemContentText>
    <CodeBox text="docker ps" />
    <img
      src="/lecture/3/dockerPs.png"
      alt="docker ps"
    />
  </SliderItem>
);

const Slide3 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE3_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      이제 만든 컨테이너로 접속해봅니다.<br />
      컨테이너를 만든 것은, 가상의 컴퓨터를 하나 만든 것과 동일합니다.<br />
      다음과 같이 접속할 수 있습니다.<br />
      <Code>docker exec -it my_mysql /bin/bash</Code>를 입력하여 도커에 접속합니다.
      <CodeBox text="docker exec -it my_mysql /bin/bash" />
      <Code>exec</Code>을 통해 컨테이너 안에 접속할 수 있습니다.
      <Code>-it</Code> 명령어는 <Code>-i -t</Code>와 동일합니다.
      my_mysql 컨테이너의 <Code>/bin/bash</Code> 즉, bash 셸을 실행시키겠다는 의미입니다. 명령어를 띄울 수 있는 터미널이라고 생각해도 좋습니다.
    </SliderItemContentText>
    <SliderItemContentText>
      이제 mysql에 접속합니다. 패스워드는 root로 설정했었습니다.
      <Code>mysql -uroot -p</Code>를 입력해 mysql에 접속합니다.
      <CodeBox text="mysql -uroot -p" />
      패스워드는 root로 설정했었습니다.
      <CodeBox text="root" />
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
];
