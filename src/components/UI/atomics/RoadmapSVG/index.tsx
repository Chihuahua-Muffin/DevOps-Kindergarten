import React from 'react';
import * as Styled from './styled';

/* PATH   100,100   300,100   500,100  700,100  900,100

          100,300             500,300           900,300

          100,500   300,500   500,500  700,500, 900,500    */
const RoadmapSvg = () => (
  <Styled.PathBox>
    <svg>
      <path
        stroke="#b8b9b9"
        strokeWidth="200"
        fill="none"
        d="M300,500 Q100,500
            100,300 100,100
            300,100 500,100
            500,300 500,500
            700,500 900,500
            900,300 900,100
            700,100 500,100
            500,300 500,500
            300,500"
      />
    </svg>
  </Styled.PathBox>
);

export default RoadmapSvg;
