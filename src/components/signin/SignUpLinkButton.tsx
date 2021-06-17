import Link from 'next/link';
import {
  chakra,
  Text,
  Button,
} from '@chakra-ui/react';

const SignUpButton = chakra(Button, {
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
})

const SignUpLinkText = chakra(Text, {
  baseStyle: {
    textAlign: 'center',
  },
});

const CaptionText = chakra(Text, {
  baseStyle: {
    fontSize: '13px',
    fontWeight: '200',
    textAlign: 'center',
  },
});

const SignUpLinkButton = () => {
  return (
    <Link href="/signup">
      <SignUpButton>
        <CaptionText>
          아직 회원이 아니신가요?
        </CaptionText>
        <SignUpLinkText>
          회원가입
        </SignUpLinkText>
      </SignUpButton>
    </Link>
  );
}

export default SignUpLinkButton;
