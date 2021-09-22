import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LectureCardTag from '../../atomics/LectureCardTag';
import * as Styled from './styled';

interface CardProps {
  title: string,
  image: string,
  description: string,
  tags: string[],
  lectureNumber: string | number,
}

const LectureCard = ({
  title, image, description, tags, lectureNumber,
}: CardProps) => (
  <Styled.LectureCardContainer>
    <Link href={`/lecture/${lectureNumber}`}>
      <Styled.LectureContentCard>
        <Styled.ImageBox>
          <Image
            src={`/${image}`}
            alt="Lecture Image"
            draggable={false}
            width={200}
            height={200}
            objectFit="contain"
          />
        </Styled.ImageBox>
        <Styled.EnglishHeadText>{title}</Styled.EnglishHeadText>
        <Styled.DescriptionText>{description}</Styled.DescriptionText>
      </Styled.LectureContentCard>
    </Link>
    <LectureCardTag tags={tags} />
  </Styled.LectureCardContainer>
);

export default LectureCard;
