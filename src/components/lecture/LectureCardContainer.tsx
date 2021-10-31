import React from 'react';
import { Grid } from '@chakra-ui/react';
import LectureCard from './LectureCard';

import contents from '#/components/lecture/contents';

const LectureCardContainer = () => (
  <Grid
    templateColumns={{
      sm: 'repeat(1, 1fr)', // 320
      md: 'repeat(2, 1fr)', // 768
      lg: 'repeat(2, 1fr)', // 1000
      xl: 'repeat(3, 1fr)', // 1200
    }}
    gap={6}
    margin={20}
  >
    {contents.map((content) => (
      <LectureCard
        key={content.lectureNumber}
        lectureNumber={content.lectureNumber}
        card={content.card}
      />
    ))}
  </Grid>
);

export default LectureCardContainer;
