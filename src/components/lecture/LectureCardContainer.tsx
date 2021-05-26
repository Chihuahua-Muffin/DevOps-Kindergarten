import React from 'react';
import { Grid } from '@chakra-ui/react';
import LectureCard from './LectureCard';


const mockUpDatas = [
  {
    id: '12532123', // hash
    title: 'Github Actions로 CI 구축하기',
    image: 'githubActions.png',
    description: 'Github에 코드 push할 때 마다 Jest 자동 테스트 구축하기',
    tags: ['Github Actions', 'CI', 'JavaScript', 'Jest'],
  },
];

const LectureCardContainer = () => (
  <Grid
    templateColumns={{
      sm: 'repeat(1, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      xl: 'repeat(4, 1fr)',
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
