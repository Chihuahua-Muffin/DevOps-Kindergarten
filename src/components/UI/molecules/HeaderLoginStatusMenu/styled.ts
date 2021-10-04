import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  chakra,
  Text,
} from '@chakra-ui/react';

export const UserNameText = chakra(Text, {
  baseStyle: {
    fontWeight: '600',
  },
});

export const StatusMenu = chakra(Menu, {
  baseStyle: {
  },
});

export const StatusMenuButton = chakra(MenuButton, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const StatusMenuItem = chakra(MenuItem, {
  baseStyle: {
  },
});

export const StatusMenuList = chakra(MenuList, {
  baseStyle: {
  },
});

export const StatusMenuDivider = chakra(MenuDivider, {
  baseStyle: {
  },
});
