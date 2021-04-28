import {
  chakra,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const Container = chakra(Box, {
  baseStyle: {
    textAlign: "center",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      backgroundColor: "blue.300",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      color: "white",
    },
    "&:hover p": {
      color: "white",
    }
  },
});

const Field = () => {
  return (
    <Container>
      <Heading as="h1">CD</Heading>
      <Text color="gray.500">Continuous Delivery</Text>
      <Text color="gray.500">지속적 배포</Text>
    </Container>
  );
};

export default Field;
