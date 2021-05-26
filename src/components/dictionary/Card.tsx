import React from 'react';
import {
  Box,
  chakra,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import '@fontsource/song-myung';

import CardTag from './CardTag';

interface CardProps {
  wordEnglish: string,
  wordKorean: string,
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
    border: '6px solid #111111',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    backgroundColor: '#f7f7f7',
    transition: 'transform .3s ease',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-5px);'
    },
  },
});

const EnglishHeadText = chakra(Text, {
  baseStyle: {
    fontFamily: 'Song Myung',
    fontSize: '30px',
    lineHeight: '25px',
  },
});

const KoreanHeadText = chakra(Text, {
  baseStyle: {
    fontFamily: 'Song Myung',
    fontSize: '20px',
  },
});

const DescriptionText = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
  },
});

const Card = ({
  wordEnglish, wordKorean, description, tags,
}: CardProps) => (
  <Link href={`/dictionary/${wordEnglish}`}>
    <DictionaryCard>
      <EnglishHeadText>{wordEnglish}</EnglishHeadText>
      <KoreanHeadText>{wordKorean}</KoreanHeadText>
      <DescriptionText>{description}</DescriptionText>
      <CardTag tags={tags} />
    </DictionaryCard>
  </Link>
);

export default Card;
