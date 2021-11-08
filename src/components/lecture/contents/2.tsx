import React from 'react';
import SliderItem from '../slider/SliderItem';

export const lectureNumber = 2;
export const Title = '기초 리눅스 명령어';

// API 되면 체크포인트 true로
export const Checkpoints = [
  {
    name: '체크포인트1',
  },
  {
    name: '체크포인트2',
  },
];

const Slide1 = () => (
  <SliderItem>
    <h1>id is two 1/2</h1>
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <h1>id is two 2/2</h1>
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
];
