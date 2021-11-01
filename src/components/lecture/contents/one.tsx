import React from 'react';

import SliderItem from '../slider/SliderItem';
import GoStepButton from '#/components/lecture/goStepButton';

// API 되면 체크포인트 true로
export const Checkpoints = [
  {
    name: '체크포인트1입니다. 잘 할수 있을까요?',
    isChecked: false,
  },
  {
    name: '체크포인트2',
    isChecked: false,
  },
  {
    name: '체크포인트3',
    isChecked: false,
  },
  {
    name: '체크포인트4',
    isChecked: false,
  },
  {
    name: '체크포인트5',
    isChecked: false,
  },
  {
    name: '체크포인트6',
    isChecked: false,
  },
  {
    name: '체크포인트7',
    isChecked: false,
  },
  {
    name: '체크포인트8',
    isChecked: false,
  },
  {
    name: '체크포인트9',
    isChecked: false,
  },
];

const Slide1 = () => (
  <SliderItem>
    <h1>
      id is one 1/2
    </h1>
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <h1>
      id is one 1/2
    </h1>
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
    content: <Slide2 />,
  },
  {
    slideId: 4,
    content: <Slide2 />,
  },
  {
    slideId: 5,
    content: <Slide2 />,
  },
  {
    slideId: 6,
    content: <Slide2 />,
  },
  {
    slideId: 7,
    content: <Slide2 />,
  },
  {
    slideId: 8,
    content: <Slide2 />,
  },
  {
    slideId: 9,
    content: <Slide2 />,
  },
];
