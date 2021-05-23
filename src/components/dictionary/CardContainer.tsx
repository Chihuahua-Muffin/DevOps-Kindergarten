import { Grid } from '@chakra-ui/react';
import Card from './Card';

const CardContainer = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default CardContainer;
