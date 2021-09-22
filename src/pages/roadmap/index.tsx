import React from 'react';

import RoadmapSvg from '#/components/UI/atomics/RoadmapSVG';
import RoadmapFieldContainer from '#/components/UI/organisms/RoadmapFieldContainer';
import * as Styled from './styled';

const RoadMapPage = () => (
  <Styled.RoadmapContainer>
    <RoadmapSvg />
    <RoadmapFieldContainer />
  </Styled.RoadmapContainer>
);

export default RoadMapPage;
