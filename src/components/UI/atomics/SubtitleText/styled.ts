import { Text, chakra } from '@chakra-ui/react';

export const SubTitle = chakra(Text, {
  baseStyle: {
    display: 'flex',
    fontSize: '28px',
    fontWeight: '600',
    margin: '20px 0',
    scrollMarginTop: '90px',
    '&:hover a': {
      display: 'block',
    },
  },
});
