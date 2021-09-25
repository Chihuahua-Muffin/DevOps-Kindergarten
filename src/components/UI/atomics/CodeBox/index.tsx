import React, { useState } from 'react';
import * as Styled from './styled';

// const toastId = 'TOAST';

interface CodeBoxProps {
  text: string;
}

/* text에는 안에 들어갈 코드 내용이 들어감 */
const CodeBox = ({ text }: CodeBoxProps) => {
  // const toast = useToast();
  const [CopyButtonText, setCopyButtonText] = useState('복사하기');
  const isButtonDisabled = CopyButtonText !== '복사하기';

  const onClickButton = () => {
    const tempElem = document.createElement('textarea');
    tempElem.value = text;
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);
    // if (!toast.isActive(toastId)) {
    setCopyButtonText('복사완료');
    setTimeout(() => {
      setCopyButtonText('복사하기');
    }, 2000);
    // toast({
    //   id: toastId,
    //   title: '클립보드에 복사되었습니다.',
    //   status: 'success',
    //   duration: 2000,
    //   position: 'bottom-left',
    //   isClosable: true,
    // });
    // }
  };

  return (
    <Styled.Container>
      <Styled.CopyButton
        colorScheme="teal"
        onClick={onClickButton}
        name="copyButton"
        isDisabled={isButtonDisabled}
      >
        {CopyButtonText}
      </Styled.CopyButton>
      <Styled.CodeContainer>
        <Styled.Code as="pre">{text}</Styled.Code>
      </Styled.CodeContainer>
    </Styled.Container>
  );
};

export default CodeBox;
