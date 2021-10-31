/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import dynamic from 'next/dynamic';

import SlideContents, { Checkpoints } from '#/components/lecture/contents/one';
import Slider from '#/components/lecture/slider/Slider';

const DynamicLectureLayout = dynamic(() => import('#/components/layouts/Lecture'), {
  ssr: false,
});

const LectureContentPage = () => (
  <Slider>
    {SlideContents.map((i) => <div key={i.slideId}>{i.content}</div>)}
  </Slider>
);

LectureContentPage.getLayout = (page: React.ReactElement) => (
  <DynamicLectureLayout checkpoints={Checkpoints}>
    {page}
  </DynamicLectureLayout>
);

export default LectureContentPage;
