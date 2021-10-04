import React from 'react';
import * as Styled from './styled';

interface CardTagProps {
  tags: string[];
}

const LectureCardTag = ({ tags }: CardTagProps) => (
  <Styled.TagContainer>
    {tags.map((tag) => (
      <Styled.Tag key={tag}>
        <Styled.TagText color="teal.600" fontWeight="bold">#</Styled.TagText>
        <Styled.TagText color="teal.400">{tag}</Styled.TagText>
      </Styled.Tag>
    ))}
  </Styled.TagContainer>
);

export default LectureCardTag;
