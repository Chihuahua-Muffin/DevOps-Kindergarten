import React, { useState } from 'react';
import {
  Box,
  chakra,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import LectureCardTag from './LectureCardTag';
import LectureProgress from './LectureProgress';
import type { Card } from '#/components/lecture/contents/types';
import { useAppSelector } from '#/hooks/useRedux';

interface CardProps {
  lectureNumber: number;
  card: Card;
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
    rowGap: '10px',
    padding: '10px',
    width: '350px',
    height: '350px',
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    borderRadius: '20px',
    transition: 'transform .3s ease',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-5px);',
    },
  },
});

const ImageBox = chakra(Box, {
  baseStyle: {
    width: '150px',
    height: '150px',
  },
});

const TitleText = chakra(Text, {
  baseStyle: {
    fontSize: '25px',
    fontWeight: 'bold',
    lineHeight: '25px',
  },
});

const DescriptionText = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    width: '270px',
  },
});

const BackContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    borderRadius: '20px',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

const BackTitleText = chakra(Text, {
  baseStyle: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
  },
});

const LectureCard = ({
  card, lectureNumber,
}: CardProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const lectureProgress = useAppSelector((state) => state.user.lectureProgress);

  const onHoverCard = () => {
    setHover(true);
  };

  const onLeaveCard = () => {
    setHover(false);
  };

  return (
    <DictionaryCardContainer>
      <Link href={`/lecture/${lectureNumber}`}>
        <DictionaryContentCard onMouseEnter={onHoverCard} onMouseLeave={onLeaveCard}>
          <ImageBox>
            <Image
              src={`/${card.image}`}
              alt="Lecture Image"
              draggable={false}
              width={200}
              height={200}
              objectFit="cover"
            />
          </ImageBox>
          <TitleText>{card.title}</TitleText>
          <DescriptionText>{card.description}</DescriptionText>
          <LectureProgress
            progress={lectureProgress[lectureNumber]
              ? lectureProgress[lectureNumber]?.progressRate : 0}
          />
          {hover ? (
            <BackContainer>
              <BackTitleText>관련 태그</BackTitleText>
              <LectureCardTag tags={card.tags} />
            </BackContainer>
          ) : ''}
        </DictionaryContentCard>
      </Link>
    </DictionaryCardContainer>
  );
};

export default LectureCard;
