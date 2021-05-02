import {
  chakra,
  Box,
  Heading,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import Link from 'next/link';

const Container = chakra(Box, {
  baseStyle: {
    gridRow: "2",
    gridColumn: "3",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: '#F7FAFC',
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      cursor: "pointer",
    },
  },
});

// 모듈화 시키는 작업 필요
// Field 컴포넌트는 로드맵 페이지에서 하나의 데브옵스 분야에 대한 버튼을 나타냄
const Field = () => {
  return (
    <Tooltip hasArrow gutter={20} label="CD에 대한 간략한 설명" bg="teal.300" color="white">
      <Link href="/explain/CD">
        <Container>
          <Heading as="h1">CD</Heading>
          <Text color="gray.500">Continuous Delivery</Text>
          <Text color="gray.500">지속적 전달</Text>
        </Container>
      </Link>
    </Tooltip>
  );
};

export default Field;
