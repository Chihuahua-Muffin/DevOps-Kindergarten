import { chakra, Spacer, Button, Box } from '@chakra-ui/react';
import { HEADER_HEIGHT } from '#/constants';

export const Container = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadow: 'md',
    position: 'sticky',
    backgroundColor: 'white',
    top: '0',
    height: HEADER_HEIGHT,
    width: '100%',
    zIndex: '5',
  },
});

export const FlexItem = chakra(Box, {
  baseStyle: {
    padding: '1.5em',
  },
});

export const HeaderSpacer = chakra(Spacer, {
  baseStyle: {
  },
});

export const LogoButton = chakra(Button, {
  baseStyle: {
  },
});
