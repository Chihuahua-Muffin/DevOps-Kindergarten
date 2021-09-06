import React, {
  useCallback,
} from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
  chakra,
  Text,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FaceIcon from '@material-ui/icons/Face';

import { useLoginState, useLoginDispatch } from '#/contexts/LoginContext';
import {
  ICON_STYLE,
  LOGOUT_ACTION,
  PROFILE_PAGE_URL,
  LANDING_PAGE_URL,
  LOGIN_STORAGE_KEY,
  TOAST_DURATION,
  TOAST_STATUS_ERROR,
} from '#/constants';
import storage from '#/lib/storage';

const UserNameText = chakra(Text, {
  baseStyle: {
    fontWeight: '600',
  },
});

const LoginStatusMenu = () => {
  const loginState = useLoginState();
  const loginDispatch = useLoginDispatch();
  const router = useRouter();
  const toast = useToast();

  const logoutButtonHandler = useCallback(() => {
    loginDispatch({ type: LOGOUT_ACTION });
    storage.remove(LOGIN_STORAGE_KEY);
    router.replace(LANDING_PAGE_URL);
    toast({
      title: '로그아웃 되었습니다!',
      status: TOAST_STATUS_ERROR,
      duration: TOAST_DURATION,
      isClosable: true,
    });
  }, [loginDispatch, router, toast]);

  return (
    <Menu>
      <MenuButton display="flex" alignItems="center" as={Button}>
        <FaceIcon style={ICON_STYLE} />
        프로필
      </MenuButton>
      <MenuList>
        <MenuItem>
          <UserNameText>
            {loginState.username}
          </UserNameText>
          님 안녕하세요 👋
        </MenuItem>
        <MenuDivider />
        <Link href={PROFILE_PAGE_URL}>
          <MenuItem>프로필</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem onClick={logoutButtonHandler}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LoginStatusMenu;
