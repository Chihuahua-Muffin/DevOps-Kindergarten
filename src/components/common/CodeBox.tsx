import React from 'react';
import { chakra, Box, Button, Text } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react"

const toastId = 'TOAST';

interface CodeBoxProps {
  text: string;
}

const Container = chakra(Box, {
  baseStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});

const CodeContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    backgroundColor: 'gray.50',
    width: '600px',
    padding: '10px',
    borderRadius: '5px',
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
});

const Code = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    whiteSpace: 'pre',
    textAlign: 'start',
  },
});

const CopyButton = chakra(Button, {
  baseStyle: {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '100',
    transform: 'translateY(-100%)',
  },
});

const CodeBox = ({ text }: CodeBoxProps) => {
  const toast = useToast();

  const onClickButton = () => {
    const tempElem = document.createElement('textarea');
    tempElem.value = text;
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        title: '클립보드에 복사되었습니다.',
        status: 'success',
        duration: 2000,
        position: 'bottom-left',
        isClosable: true,
      });
    }
  };

  return (
    <Container>
      <CopyButton onClick={onClickButton}>복사하기</CopyButton>
      <CodeContainer>
        <Code as="pre">{text}</Code>
      </CodeContainer>
    </Container>
  );
};

export default CodeBox;
