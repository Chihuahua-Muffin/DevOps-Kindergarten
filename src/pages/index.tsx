import React from 'react';
import Link from 'next/link';
import {
  Flex, Box, Button, Center,
} from '@chakra-ui/react';

const LandingPage = () => (
  <>
    <Box w="100%" h="100vh" bg="cyan.200" textAlign="center">
      <Flex h="100%" direction="column" align="center" justify="space-around">
        <Center>랜딩 페이지</Center>
        <Link href="/roadmap"><Button>시작하기</Button></Link>
      </Flex>
    </Box>
  </>
);

export default LandingPage;
