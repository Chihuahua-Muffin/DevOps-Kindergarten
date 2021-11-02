import React, { useMemo } from 'react';
import {
  chakra,
  Box,
  Text,
  useClipboard,
  IconButton,
  Tooltip,
  useMediaQuery,
  // useToast,
} from '@chakra-ui/react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { MIN_WIDTH_1100 } from '#/constants';

interface CodeBoxProps {
  text: string;
}

const Container = chakra(Box, {
  baseStyle: {
    margin: '20px 0px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
});

const CodeContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    backgroundColor: 'gray.800',
    width: 'calc(100vw - 360px)',
    padding: '20px',
    borderRadius: '5px',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
});

const SmallLayoutCodeContainer = chakra(CodeContainer, {
  baseStyle: {
    width: 'calc(100vw - 130px)',
  },
});

const Code = chakra(Text, {
  baseStyle: {
    fontSize: '14px',
    whiteSpace: 'pre',
    textAlign: 'start',
    color: 'white',
  },
});

const CopyButton = chakra(IconButton, {
  baseStyle: {
    color: 'white',
    position: 'absolute',
    top: '0',
    right: '0',
    margin: '5px',
    zIndex: '100',
    size: 'sm',
  },
});

/* text에는 안에 들어갈 코드 내용이 들어감 */
const CodeBox = ({ text }: CodeBoxProps) => {
  // const toast = useToast();
  const { onCopy, hasCopied } = useClipboard(text);
  const [islargerthan1100] = useMediaQuery(MIN_WIDTH_1100);
  const tooltipText = useMemo(() => (hasCopied ? '복사완료!' : '복사하기'), [hasCopied]);

  return (
    <Container>
      <Tooltip
        label={tooltipText}
        closeOnClick={false}
      >
        <CopyButton
          onClick={onCopy}
          colorScheme="white"
          name="copyButton"
          icon={<ContentCopyIcon color="inherit" fontSize="small" />}
          variant="ghost"
        />
      </Tooltip>
      {islargerthan1100 ? (
        <CodeContainer>
          <Code as="pre">
            $
            {' '}
            {text}
          </Code>
        </CodeContainer>
      ) : (
        <SmallLayoutCodeContainer>
          <Code as="pre">
            $
            {' '}
            {text}
          </Code>
        </SmallLayoutCodeContainer>
      )}
    </Container>
  );
};

export default CodeBox;
