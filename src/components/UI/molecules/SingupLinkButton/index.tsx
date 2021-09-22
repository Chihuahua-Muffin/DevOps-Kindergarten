import React from 'react';
import Link from 'next/link';
import * as Styled from './styled';

const SignUpLinkButton = () => (
  <Link href="/signup">
    <Styled.SignUpButton>
      <Styled.CaptionText>
        아직 회원이 아니신가요?
      </Styled.CaptionText>
      <Styled.SignUpLinkText>
        회원가입
      </Styled.SignUpLinkText>
    </Styled.SignUpButton>
  </Link>
);

export default SignUpLinkButton;
