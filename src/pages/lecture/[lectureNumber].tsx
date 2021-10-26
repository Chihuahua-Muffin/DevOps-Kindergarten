/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Slider from '#/components/lecture/slider/Slider';
import contents from '#/components/lecture/contents';
import type { Slide } from '#/components/lecture/contents/types';

const DynamicLectureLayout = dynamic(() => import('#/components/layouts/Lecture'), {
  ssr: false,
});

const LectureContentPage = () => {
  const [sliderList, setSliderList] = useState<Slide[]>([]);
  const router = useRouter();
  const { lectureNumber } = router.query;

  useEffect(() => {
    contents.forEach((val) => {
      if (Number(lectureNumber) === val.lectureNumber) {
        setSliderList(val.sliderContents);
      }
    });
  }, [lectureNumber, router.query]);

  return (
    <Slider>
      {sliderList.map((i) => <div key={i.slideId}>{i.content}</div>)}
    </Slider>
  );
};

LectureContentPage.getLayout = (page: React.ReactElement) => (
  <DynamicLectureLayout>
    {page}
  </DynamicLectureLayout>
);

export default LectureContentPage;
