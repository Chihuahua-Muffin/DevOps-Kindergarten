import {
  chakra,
  Grid,
} from '@chakra-ui/react';
import Field from '#/components/dictionary/Field';

const Container = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",
    gap: 6,
  },
});

const RoadMapPage = () => {
  return (
    <Container>
      <Field />
    </Container>
  );
};

export default RoadMapPage;
