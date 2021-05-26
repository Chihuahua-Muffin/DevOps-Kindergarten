import React from 'react';
import { Grid } from '@chakra-ui/react';
import LectureCard from './LectureCard';


const mockUpDatas = [
  {
    id: '12532123', // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest', 'Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: '125323', // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest', 'Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: '12532213123', // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest', 'Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
  {
    id: '1253211111', // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest', 'Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
];

const LectureCardContainer = () => (
  <Grid
    templateColumns={{
      sm: 'repeat(1, 1fr)', // 320
      md: 'repeat(2, 1fr)', // 768
      lg: 'repeat(2, 1fr)', // 960
      xl: 'repeat(3, 1fr)', // 1200
    }}
    gap={6}
    margin={20}
  >
    {mockUpDatas.map((data) => (
      <LectureCard
        key={data.id}
        title={data.title}
        image={data.image}
        description={data.description}
        tags={data.tags}
      />
    ))}
  </Grid>
);

export default LectureCardContainer;
