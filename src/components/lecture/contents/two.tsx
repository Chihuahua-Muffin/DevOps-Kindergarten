import React from 'react';
import SliderItem from '../slider/SliderItem';

// API 되면 체크포인트 true로
export const Checkpoints = [
  {
    name: '체크포인트1',
    isChecked: false,
  },
  {
    name: '체크포인트2',
    isChecked: false,
  },
];

const Slide1 = () => (
  <SliderItem>
    <h1>
      id is two 1/2
    </h1>
  </SliderItem>
);

const Slide2 = () => (
  <SliderItem>
    <h1>
      id is two 2/2
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
];
