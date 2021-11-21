import React from 'react';
import {
  Box,
  chakra,
  Text,
} from '@chakra-ui/react';

interface CardTagProps {
  tags: string[];
}

const TagContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'rgb(255, 255, 255)',
    margin: '20px',
    width: '300px',
    borderRadius: '20px',
  },
});

const Tag = chakra(Box, {
  baseStyle: {
    display: 'flex',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '4px',
    margin: '4px',
  },
});

const LectureCardTag = ({ tags }: CardTagProps) => (
  <TagContainer>
    {tags.map((tag) => (
      <Tag key={tag}>
        <Text>#</Text>
        <Text>{tag}</Text>
      </Tag>
    ))}
  </TagContainer>
);

export default LectureCardTag;
