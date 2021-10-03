import React from 'react';
import Image from 'next/image';
import {
  chakra,
  Box,
  Text,
} from '@chakra-ui/react';

import Hyperlink from '#/components/common/Hyperlink';

interface ExplainTitleProps {
  title: string;
  src: string;
  titleHref: string;
  explaination: JSX.Element;
  features: string[];
}

const Container = chakra(Box, {
  baseStyle: {
    margin: '1rem 0',
  },
});

const ToolTitleContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'baseline',
    columnGap: '1rem',
  },
});

const ExplainToolExplaination = chakra(Box, {
  baseStyle: {
    margin: '1rem 0',
    fontSize: '1rem',
  },
});

const FeatureTitleText = chakra(Text, {
  baseStyle: {
    margin: '1rem 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
});

const FeatureContainer = chakra(Box, {
  baseStyle: {
    marginLeft: '1rem',
  },
});

const ExplainTool = ({ title, src, titleHref, explaination, features }: ExplainTitleProps) => (
  <Container>
    <ToolTitleContainer>
      <Image src={src} width="50" height="50" draggable="false" />
      <Hyperlink
        href={titleHref}
      >
        <h2 style={{ scrollMarginTop: '7rem' }} id={title}>
          {title}
        </h2>
      </Hyperlink>
    </ToolTitleContainer>
    <ExplainToolExplaination>
      {explaination}
    </ExplainToolExplaination>
    <FeatureTitleText>
      {title}
      의 특징들
    </FeatureTitleText>
    <FeatureContainer>
      {features.map((feature) => (
        <Text key={feature}>
          •
          {' '}
          {feature}
        </Text>
      ))}
    </FeatureContainer>
  </Container>
);

export default ExplainTool;
