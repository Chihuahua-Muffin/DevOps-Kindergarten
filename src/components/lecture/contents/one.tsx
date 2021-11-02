import React from 'react';

import SliderItem from '../slider/SliderItem';
import SliderItemHeader from '../slider/SliderItemHeader';

export const Title = '기초 리눅스 명령어';

const SLIDE1_TITLE = '폴더 만들기';
const SLIDE2_TITLE = '폴더 이동하기';
const SLIDE3_TITLE = '문서 편집기 열기';
const SLIDE4_TITLE = '현재 폴더의 파일목록 확인하기';

// API 되면 체크포인트 true로
export const Checkpoints = [
  {
    name: SLIDE1_TITLE,
    isChecked: false,
  },
  {
    name: SLIDE2_TITLE,
    isChecked: false,
  },
  {
    name: SLIDE3_TITLE,
    isChecked: false,
  },
  {
    name: SLIDE4_TITLE,
    isChecked: false,
  },
];

const Slide1 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE1_TITLE}</SliderItemHeader>
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE2_TITLE}</SliderItemHeader>
  </SliderItem>
);

const Slide3 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE3_TITLE}</SliderItemHeader>
  </SliderItem>
);

const Slide4 = () => (
  <SliderItem>
    <SliderItemHeader>{SLIDE4_TITLE}</SliderItemHeader>
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
