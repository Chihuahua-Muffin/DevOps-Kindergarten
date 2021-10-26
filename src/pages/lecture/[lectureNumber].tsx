/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const DynamicLectureLayout = dynamic(() => import('#/components/layouts/Lecture'), {
  ssr: false,
});

const LectureContentPage = () => {
  const router = useRouter();
  const { lectureNumber } = router.query;
  return (
    <>
      <div>1실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 입니다.</div>
      <div>실습 아이디:{' '}{lectureNumber} 페이지 마지막 입니다.</div>
    </>
  );
};

LectureContentPage.getLayout = (page: React.ReactElement) => (
  <DynamicLectureLayout>
    {page}
  </DynamicLectureLayout>
);

export default LectureContentPage;
