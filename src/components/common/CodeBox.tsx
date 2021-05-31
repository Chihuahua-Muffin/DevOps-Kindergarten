import React from 'react';
import { chakra, Box, Button } from '@chakra-ui/react';

interface CodeBoxProps {
  text: string;
}

const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '600px',
    height: '300px',
    borderRadius: '5px',
  },
});

const CopyButton = chakra(Button, {
  baseStyle: {
    position: 'absolute',
    margin: '10px',
    top: '0',
    right: '0',
  },
});

const CodeBox = ({ text }: CodeBoxProps) => {
  const onClickButton = () => {
    const tempElem = document.createElement('textarea');
    tempElem.value = text;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);
  };
  return (
    <Container>
      <div>{text}</div>
      <CopyButton onClick={onClickButton}>클립복사</CopyButton>
    </Container>
  );
};

export default CodeBox;
