import { chakra, Box, Tooltip } from '@chakra-ui/react';
import { styled, Badge } from '@material-ui/core';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7FAFC',
    widht: '100px',
    height: '100px',
    borderRadius: '50%',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&:hover': {
      backgroundColor: '#B2F5EA',
      cursor: 'pointer',
    },
  },
});

export const FieldBox = chakra(Box, {
  baseStyle: {
  },
});

export const FieldTooltip = chakra(Tooltip, {
  baseStyle: {
  },
});

export const FieldBadge = styled(Badge)(() => ({
  color: 'default',
}));
