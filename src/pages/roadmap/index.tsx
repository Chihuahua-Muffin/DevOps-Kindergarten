import {
  chakra,
  Grid,
  Box,
} from '@chakra-ui/react';

const Container = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",
    gap: 6,
  },
});

const Item = chakra(Box, {
  baseStyle: {
    width: "100%",
    height: "10",
    backgroundColor: "blue.500"
  },
});

const RoadMapPage = () => {
  return (
    <Container>
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
      <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />
    </Container>
  );
};

export default RoadMapPage;
