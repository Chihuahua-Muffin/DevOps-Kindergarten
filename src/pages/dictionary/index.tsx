import { useRouter } from 'next/router';
import {
  chakra,
  Box,
} from '@chakra-ui/react';

const Container = chakra(Box, {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

const RoadMapPage = () => {
  const router = useRouter();

  return (
    <Container>
      {router.pathname} 페이지 입니다.
    </Container>
  );
};

export default RoadMapPage;
