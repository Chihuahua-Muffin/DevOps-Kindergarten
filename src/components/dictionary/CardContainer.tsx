import React from 'react';
import { Grid } from '@chakra-ui/react';

import Card from './Card';
import mockupDatas from '#/mockupData/dictionary';

const CardContainer = () => (
  <Grid
    templateColumns={{
      sm: 'repeat(1, 1fr)',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
      xl: 'repeat(4, 1fr)',
    }}
    gap={6}
    marginBottom={10}
  >
    {mockupDatas.map((data) => (
      <Card
        id={data.id}
        key={data.id}
        wordEnglish={data.wordEnglish}
        wordKorean={data.wordKorean}
        description={data.description}
        tags={data.tags}
      />
    ))}
  </Grid>
);

export default CardContainer;
