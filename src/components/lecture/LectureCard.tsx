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

const DictionaryCard = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '260px',
    height: '280px',
    textAlign: 'center',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    backgroundColor: '#f7f7f7',
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
  <DictionaryCard>
    <EnglishHeadText>{title}</EnglishHeadText>
    <Image
      src={`/${image}`}
      alt="Lecture Image"
      width={400}
      height={400}
      draggable={false}
    />
    <DescriptionText>{description}</DescriptionText>
    <LectureCardTag tags={tags} />
  </DictionaryCard>
);

export default LectureCard;
