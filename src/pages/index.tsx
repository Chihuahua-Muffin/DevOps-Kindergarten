import React from 'react';
import Link from 'next/link';
import { Flex, Box, Button, Center } from '@chakra-ui/react';
import CodeBox from '#/components/common/codeBox';

const LandingPage = () => (
  <>
    <Box w="100%" h="100vh" bg="gary.50" textAlign="center">
      <Flex h="100%" direction="column" align="center" justify="space-around">
        <Center>랜딩 페이지</Center>
        <Link href="/roadmap">
          <Button>시작하기</Button>
        </Link>
        <CodeBox text="dddd" />
      </Flex>
    </Box>
  </>
);

export default LandingPage;
