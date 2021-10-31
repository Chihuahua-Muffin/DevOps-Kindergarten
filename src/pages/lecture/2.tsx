/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import dynamic from 'next/dynamic';

// 아래의 import 주소에서 파일명만 바꾸면 됩니다. (컴포넌트 이름은 그대로 나둬도 됩니다.)
import SlideContents, { Checkpoints } from '#/components/lecture/contents/two';
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
