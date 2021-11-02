import React from 'react';
import { chakra, Text, Button, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { MIN_WIDTH_1100 } from '#/constants';

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

const BackButton = () => {
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);
  return (
    islargerthan1100 ? (
      <Link href="/lecture">
        <ButtonContainer colorScheme="teal" variant="ghost">
          <ArrowBackIcon />
          <ButtonText>실습리스트로 돌아가기</ButtonText>
        </ButtonContainer>
      </Link>
    ) : (
      <Link href="/lecture">
        <ButtonContainer colorScheme="teal" variant="ghost">
          <ArrowBackIcon />
        </ButtonContainer>
      </Link>
    )
  );
};

export default BackButton;
