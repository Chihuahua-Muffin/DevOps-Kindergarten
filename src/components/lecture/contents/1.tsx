import React from 'react';
import { Code } from '@chakra-ui/react';

import SliderItem from '../slider/SliderItem';
import SliderItemHeader from '../slider/SliderItemHeader';
import SliderItemContentText from '../slider/SliderItemContentText';
import CodeBox from '#/components/common/codeBox/CodeBox';

export const lectureNumber = 1;
export const Title = '기초 리눅스 명령어';

const SLIDE1_TITLE = '폴더 만들기';
const SLIDE2_TITLE = '폴더 이동하기';
const SLIDE3_TITLE = '폴더 삭제하기';
const SLIDE4_TITLE = '현재 폴더 위치 확인하기';

export const Checkpoints = [
  {
    name: SLIDE1_TITLE,
    commands: ['mkdir temp', 'ls'],
  },
  {
    name: SLIDE2_TITLE,
    commands: ['cd temp', 'cd ..'],
  },
  {
    name: SLIDE3_TITLE,
    commands: ['rmdir temp', 'ls'],
  },
  {
    name: SLIDE4_TITLE,
    commands: ['pwd'],
  },
];

const Slide1 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE1_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>mkdir temp</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      temp라는 이름의 디렉터리를 만듭니다.
    </SliderItemContentText>
    <CodeBox text="mkdir temp" />

    <SliderItemContentText>
      <Code>ls</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      ls 명령어를 통해서 현재 폴더 리스트를 확인합니다.
    </SliderItemContentText>
    <CodeBox text="ls" />
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE2_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>cd temp</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      temp 폴더 안으로 이동을 할 수 있습니다.
    </SliderItemContentText>
    <CodeBox text="cd temp" />

    <SliderItemContentText>
      <Code>cd ..</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      하위 폴더로 이동합니다.
    </SliderItemContentText>
    <CodeBox text="cd .." />
  </SliderItem>
);

const Slide3 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE3_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>rmdir temp</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      temp 이름의 폴더를 삭제합니다.
    </SliderItemContentText>
    <CodeBox text="rmdir temp" />

    <SliderItemContentText>
      <Code>ls</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      현재 폴더 리스트를 확인합니다.
    </SliderItemContentText>
    <CodeBox text="ls" />
  </SliderItem>
);

const Slide4 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE4_TITLE}</SliderItemHeader>
    <SliderItemContentText>
      <Code>pwd</Code>
    </SliderItemContentText>
    <SliderItemContentText>
      현재 위치를 출력합니다.
    </SliderItemContentText>
    <CodeBox text="pwd" />
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
