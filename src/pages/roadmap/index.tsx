import React from 'react';
import { chakra, Box } from '@chakra-ui/react';

import RoadmapSvg from '#/components/UI/atomics/RoadmapSVG';
import RoadmapFieldContainer from '#/components/UI/organisms/RoadmapFieldContainer';

export const RoadmapContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '89vh',
  },
});

const RoadMapPage = () => (
  <RoadmapContainer>
    <RoadmapSvg />
    <RoadmapFieldContainer />
  </RoadmapContainer>
);

export default RoadMapPage;
