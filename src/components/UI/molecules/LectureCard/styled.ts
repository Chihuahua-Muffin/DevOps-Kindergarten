import { chakra, Box, Text } from '@chakra-ui/react';

export const LectureCardContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const LectureContentCard = chakra(Box, {
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
    transition: 'transform .3s ease',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(-5px);',
    },
  },
});

export const ImageBox = chakra(Box, {
  baseStyle: {
    width: '150px',
    height: '150px',
  },
});

export const EnglishHeadText = chakra(Text, {
  baseStyle: {
    fontFamily: 'Song Myung',
    fontSize: '30px',
    lineHeight: '25px',
  },
});

export const DescriptionText = chakra(Text, {
  baseStyle: {
    fontSize: '12px',
  },
});
