import {
  chakra,
  Box,
  Heading,
  Text,
  Tooltip,
} from '@chakra-ui/react';

const Container = chakra(Box, {
  baseStyle: {
    gridRow: "2",
    gridColumn: "6",
    textAlign: "center",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
});

// 모듈화 시키는 작업 필요
// Field 컴포넌트는 로드맵 페이지에서 하나의 데브옵스 분야에 대한 버튼을 나타냄
const Field = () => {
  return (
    <Tooltip hasArrow gutter={20} label="CD에 대한 간략한 설명" bg="teal.300" color="white">
      <Container>
        <Heading as="h1">CD</Heading>
        <Text color="gray.500">Continuous Delivery</Text>
        <Text color="gray.500">지속적 전달</Text>
      </Container>
    </Tooltip>
  );
};

export default Field;
