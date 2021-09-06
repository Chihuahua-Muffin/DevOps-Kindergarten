import React, { useEffect } from 'react';
import { Flex, Box, Center } from '@chakra-ui/react';

import storage from '#/lib/storage';
import { useLoginDispatch } from '#/contexts/LoginContext';
import { LOGIN_ACTION, LOGIN_STORAGE_KEY } from '#/constants';

const LandingPage = () => {
  const loginDispatch = useLoginDispatch();
  /* 로그인 정보 확인 */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loginData = storage.get(LOGIN_STORAGE_KEY); // 로그인 정보를 로컬스토리지에서 가져옵니다.
      if (!loginData) return;

      loginDispatch({ type: LOGIN_ACTION, username: loginData.sub });
    }
  });

  return (
    <Box w="100%" h="100vh" bg="gary.50" textAlign="center">
      <Flex h="100%" direction="column" align="center" justify="space-around">
        <Center>랜딩 페이지</Center>
      </Flex>
    </Box>
  );
};

export default LandingPage;
