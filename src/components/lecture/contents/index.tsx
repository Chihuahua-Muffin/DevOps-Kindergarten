import One, { Checkpoints as OneCheckpoints } from './one';
import Two, { Checkpoints as TwoCheckpoints } from './two';
import type { LectureContent } from './types';

const LectureContents: LectureContent[] = [
  {
    lectureNumber: 1,
    sliderContents: One,
    checkpoints: OneCheckpoints,
    card: {
      title: 'Github Actions로 CI 구축하기',
      tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
      description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
      image: 'githubActions.png',
    },
  },
  {
    lectureNumber: 2,
    sliderContents: Two,
    checkpoints: TwoCheckpoints,
    card: {
      title: 'Github Actions로 CI 구축하기',
      tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
      description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
      image: 'githubActions.png',
    },
  },
];

export default LectureContents;
