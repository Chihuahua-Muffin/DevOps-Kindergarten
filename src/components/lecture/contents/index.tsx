/* eslint-disable max-len */
import One, { Checkpoints as OneCheckpoints, Title as OneTitle, lectureNumber as OneLectureNumaber } from './1';
import Two, { Checkpoints as TwoCheckpoints, Title as TwoTitle, lectureNumber as TwoLectureNumaber } from './2';
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
  {
    lectureNumber: TwoLectureNumaber,
    sliderContents: Two,
    checkpoints: TwoCheckpoints,
    card: {
      title: TwoTitle,
      tags: ['Docker'],
      description: '도커와 도커의 설치와 간단한 사용법에 대해서 알아봅시다.',
      image: 'docker.png',
    },
  },
];

export default LectureContents;
