import React from 'react';
import LectureCard from '../../molecules/LectureCard';
import * as Styled from './styled';

const mockUpDatas = [
  {
    id: 1, // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: 2, // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: 3, // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: 4, // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
];

const LectureCardContainer = () => (
  <Styled.CardGrid
    templateColumns={{
      sm: 'repeat(1, 1fr)', // 320
      md: 'repeat(2, 1fr)', // 768
      lg: 'repeat(2, 1fr)', // 960
      xl: 'repeat(3, 1fr)', // 1200
    }}
  >
    {mockUpDatas.map((data) => (
      <LectureCard
        key={data.id}
        lectureNumber={data.id}
        title={data.title}
        image={data.image}
        description={data.description}
        tags={data.tags}
      />
    ))}
  </Styled.CardGrid>
);

export default LectureCardContainer;
