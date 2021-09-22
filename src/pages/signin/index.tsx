import React from 'react';
import * as Styled from './styled';
import SignInForm from '#/components/UI/organisms/SigninForm';
import SignUpLinkButton from '#/components/UI/molecules/SingupLinkButton';

const RoadMapPage = () => (
  <Styled.Container>
    <SignInForm />
    <SignUpLinkButton />
  </Styled.Container>
);

export default RoadMapPage;
