import { chakra, Grid, Box, Text } from '@chakra-ui/react';

export const GridContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
});

export const FieldContainer = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: 'repeat(10, 100px)',
    gridTemplateRows: 'repeat(6, 100px)',
    margin: 'auto',
  },
});

export const DevText = chakra(Text, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridRow: '3/5',
    gridColumn: '3/5',
    fontSize: '40px',
    fontWeight: '600',
  },
});

export const OpsText = chakra(Text, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridRow: '3/5',
    gridColumn: '7/9',
    fontSize: '40px',
    fontWeight: '600',
  },
});
