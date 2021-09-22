import { chakra, Button, Box, Spacer } from '@chakra-ui/react';

export const NavigationContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const NavItem = chakra(Button, {
  baseStyle: {
    margin: '10px',
  },
});

export const NavSpacer = chakra(Spacer, {
  baseStyle: {
    margin: '10px',
  },
});
