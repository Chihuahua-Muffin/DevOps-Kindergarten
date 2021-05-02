import {
  chakra,
  Grid,
  Box,
} from '@chakra-ui/react';
import RoadmapSvg from '#/components/roadmap/Svg';
import Field from '#/components/roadmap/Field';

const RoadmapContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    top: '0',
    width: '100%',
    height: '89vh',
  },
});

const GridContainer = chakra(Grid, {
  baseStyle: {
    position: 'absolute',
    top: '0',
    left: '0',
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gap: 6,
  },
});

const RoadMapPage = () => {
  return (
    <RoadmapContainer>
      <RoadmapSvg />
      <GridContainer>
        <Field />
      </GridContainer>
    </RoadmapContainer>
  );
};

export default RoadMapPage;
