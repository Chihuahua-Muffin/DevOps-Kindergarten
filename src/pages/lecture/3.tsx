/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

// 아래의 import 주소에서 파일명만 바꾸면 됩니다. (컴포넌트 이름은 그대로 나둬도 됩니다.)
import SlideContents, {
  Checkpoints,
  Title,
  lectureNumber,
} from '#/components/lecture/contents/3'; // <- 숫자를 바꿔주세요
import Slider from '#/components/lecture/slider/Slider';
import { useAppDispatch } from '#/hooks/useRedux';
import { initialSlideCount } from '#/redux/ducks/lecture';

const DynamicLectureLayout = dynamic(
  () => import('#/components/layouts/Lecture'),
  {
    ssr: false,
  },
);

const LectureContentPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialSlideCount({
      slideCount: SlideContents.length,
      currentLectureId: lectureNumber,
    }));
  }, [dispatch]);

  return (
    <Slider>
      {SlideContents.map((i) => (
        <div key={i.slideId}>{i.content}</div>
      ))}
    </Slider>
  );
};

LectureContentPage.getLayout = (page: React.ReactElement) => (
  <DynamicLectureLayout title={Title} checkpoints={Checkpoints} lectureNumber={lectureNumber}>
    {page}
  </DynamicLectureLayout>
);

export default LectureContentPage;
