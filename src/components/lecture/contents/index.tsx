import One, { Checkpoints as OneCheckpoints, Title as OneTitle } from './1';
import Two, { Checkpoints as TwoCheckpoints, Title as TwoTitle } from './2';
import type { LectureContent } from './types';

const LectureContents: LectureContent[] = [
  {
    lectureNumber: 1,
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
    lectureNumber: 2,
    sliderContents: Two,
    checkpoints: TwoCheckpoints,
    card: {
      title: TwoTitle,
      tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
      description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
      image: 'githubActions.png',
    },
  },
];

export default LectureContents;
