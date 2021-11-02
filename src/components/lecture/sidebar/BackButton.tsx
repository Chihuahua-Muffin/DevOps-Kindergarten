import React from 'react';
import { chakra, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ButtonContainer = chakra(Button, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px',
  },
});

const ButtonText = chakra(Text, {
  baseStyle: {
    color: 'gray.600',
  },
});

const BackButton = () => (
  <Link href="/lecture">
    <ButtonContainer colorScheme="teal" variant="ghost">
      <ArrowBackIcon />
      <ButtonText>실습리스트로 돌아가기</ButtonText>
    </ButtonContainer>
  </Link>
);

export default BackButton;
