import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

import LectureCardContainer from '#/components/UI/organisms/LectureCardContainer';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

const LecturePage = () => (
  <Container>
    <LectureCardContainer />
  </Container>
);

export default LecturePage;
