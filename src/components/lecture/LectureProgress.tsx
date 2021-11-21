import React from 'react';
import {
  chakra,
  Text,
  Box as ChakraBox,
  Progress as ChakraProgress,
} from '@chakra-ui/react';

interface CardTagProps {
  progress: number;
}

const Container = chakra(ChakraBox, {
  baseStyle: {
    position: 'relative',
    width: '95%',
  },
});

const Progress = chakra(ChakraProgress, {
  baseStyle: {
    width: '100%',
    height: '30px',
    borderRadius: '10px',
  },
});

const ProgressText = chakra(Text, {
  baseStyle: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
    fontWeight: 'bold',
  },
});

const LectureProgress = ({ progress }: CardTagProps) => (
  <Container>
    <ProgressText
      color={progress > 60 ? 'white' : 'black'}
    >
      {progress}
      %
    </ProgressText>
    <Progress
      value={progress}
      isAnimated
      hasStripe
    />
  </Container>
);

export default LectureProgress;
