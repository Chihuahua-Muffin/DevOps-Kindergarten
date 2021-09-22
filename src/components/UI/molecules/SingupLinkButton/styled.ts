import { chakra, Button, Text } from '@chakra-ui/react';

export const SignUpButton = chakra(Button, {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: '30%',
    width: '100%',
    height: '50px',
    borderRadius: '10px',
    whiteSpace: 'pre',
    border: '1px solid #E2E8F0',
  },
});

export const SignUpLinkText = chakra(Text, {
  baseStyle: {
    textAlign: 'center',
  },
});

export const CaptionText = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
    fontWeight: '200',
    textAlign: 'center',
  },
});
