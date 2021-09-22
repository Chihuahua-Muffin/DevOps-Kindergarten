import React from 'react';
import { useRouter } from 'next/router';

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

export default LectureContentPage;
