import React from 'react';
import { useRouter } from 'next/router';
import LectureLayout from '#/components/layouts/Lecture';

const LectureContentPage = () => {
  const router = useRouter();
  const { lectureNumber } = router.query;
  return (
    <div>
      실습 아이디:
      {' '}
      {lectureNumber}
      페이지 입니다.
    </div>
  );
};

LectureContentPage.getLayout = (page: React.ReactElement) => (
  <LectureLayout>
    {page}
  </LectureLayout>
);

export default LectureContentPage;
