/* eslint-disable max-len */
import One, { Checkpoints as OneCheckpoints, Title as OneTitle, lectureNumber as OneLectureNumaber } from './1';
// import Two, { Checkpoints as TwoCheckpoints, Title as TwoTitle, lectureNumber as TwoLectureNumaber } from './2';
import type { LectureContent } from './types';

const LectureContents: LectureContent[] = [
  {
    lectureNumber: OneLectureNumaber,
    sliderContents: One,
    checkpoints: OneCheckpoints,
    card: {
      title: OneTitle,
      tags: ['Linux'],
      description: '기본적인 리눅스 명령어부터 익혀봅니다.',
      image: 'linux.png',
    },
  },
  // {
  //   lectureNumber: TwoLectureNumaber,
  //   sliderContents: Two,
  //   checkpoints: TwoCheckpoints,
  //   card: {
  //     title: TwoTitle,
  //     tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  //     description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
  //     image: 'githubActions.png',
  //   },
  // },
];

export default LectureContents;
