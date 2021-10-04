import { Box, chakra, Text } from '@chakra-ui/react';

export const TagContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '20px',
    width: '350px',
  },
});

export const Tag = chakra(Box, {
  baseStyle: {
    display: 'flex',
    backgroundColor: '#eeeeee',
    fontSize: '12px',
    padding: '4px',
    margin: '4px',
  },
});

export const TagText = chakra(Text, {
  baseStyle: {
    display: 'flex',
    backgroundColor: '#eeeeee',
    fontSize: '12px',
    padding: '4px',
    margin: '4px',
  },
});
