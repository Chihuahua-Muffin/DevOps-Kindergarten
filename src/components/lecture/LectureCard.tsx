import React from 'react';
import {
  Box,
  chakra,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import '@fontsource/song-myung';

import LectureCardTag from './LectureCardTag';

interface CardProps {
  title: string,
  image: string,
  description: string,
  tags: string[],
}

const DictionaryCardContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DictionaryContentCard = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    width: '350px',
    height: '350px',
    textAlign: 'center',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
});

const ImageBox = chakra(Box, {
  baseStyle: {
    width: '150px',
    height: '150px',
  },
});

const EnglishHeadText = chakra(Text, {
  baseStyle: {
    fontFamily: 'Song Myung',
    fontSize: '30px',
    lineHeight: '25px',
  },
});

const DescriptionText = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
  },
});

const LectureCard = ({
  title, image, description, tags,
}: CardProps) => (
  <DictionaryCardContainer>
    <DictionaryContentCard>
      <ImageBox>
        <Image
          src={`/${image}`}
          alt="Lecture Image"
          draggable={false}
          width={200}
          height={200}
          objectFit="contain"
        />
      </ImageBox>
      <EnglishHeadText>{title}</EnglishHeadText>
      <DescriptionText>{description}</DescriptionText>
    </DictionaryContentCard>
    <LectureCardTag tags={tags} />
  </DictionaryCardContainer>
);

export default LectureCard;
