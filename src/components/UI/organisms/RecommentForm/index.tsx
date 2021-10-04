import React from 'react';
import * as Styled from './styled';

const RecommentForm = () => (
  <Styled.RecommentFormContainer as="form">
    <Styled.FormInput />
    <Styled.FormButton>답글</Styled.FormButton>
  </Styled.RecommentFormContainer>
);

export default RecommentForm;
