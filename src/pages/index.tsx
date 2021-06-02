import React from 'react';
import Link from 'next/link';
import { Flex, Box, Button, Center } from '@chakra-ui/react';
import CodeBox from '#/components/common/CodeBox';

const TEXT = 'const CopyButton = chakra(Button, dafdfdsfdsafadsfdsfdsfadsfadsfsdfasdfadsfsdafasdfdsfsdafds{\n'
+ '  baseStyle: {\n'
+ "    position: 'absolute',\n"
+ "    margin: '10px',\n"
+ "    top: '0',\n"
+ "    right: '0',\n"
+ '  },\n'
+ '});';

const LandingPage = () => (
  <>
    <Box w="100%" h="100vh" bg="gray.100" textAlign="center">
      <Flex h="100%" direction="column" align="center" justify="space-around">
        <Center>랜딩 페이지</Center>
        <Link href="/roadmap">
          <Button>시작하기</Button>
        </Link>
        <CodeBox text={TEXT} />
      </Flex>
    </Box>
  </>
);

export default LandingPage;
