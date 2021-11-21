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
    margin: '20px',
    width: '300px',
    borderRadius: '20px',
  },
});

const Tag = chakra(Box, {
  baseStyle: {
    backgroundColor: 'gray.100',
    borderRadius: '5px',
    display: 'flex',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px',
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
