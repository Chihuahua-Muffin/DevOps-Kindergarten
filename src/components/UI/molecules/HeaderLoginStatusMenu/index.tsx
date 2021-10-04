import React, { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FaceIcon from '@material-ui/icons/Face';

import * as Styled from './styled';
import { useAppSelector, useAppDispatch } from '#/hooks/useRedux';
import { logout } from '#/redux/reducers/auth';
import {
  ICON_STYLE,
  PROFILE_PAGE_URL,
  LANDING_PAGE_URL,
  ACCESS_TOKEN,
  TOAST_DURATION,
  TOAST_STATUS_ERROR,
} from '#/constants';
import storage from '#/lib/storage';
import { logoutAPI } from '#/lib/api/auth';

const LoginStatusMenu = () => {
  const authState = useAppSelector((state) => state.auth);
  const authDispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();

  const logoutButtonHandler = useCallback(() => {
    authDispatch(logout());
    storage.remove(ACCESS_TOKEN);
    router.replace(LANDING_PAGE_URL);
    toast({
      title: '로그아웃 되었습니다!',
      status: TOAST_STATUS_ERROR,
      duration: TOAST_DURATION,
      isClosable: true,
    });
    logoutAPI(authState.username);
  }, [authDispatch, authState.username, router, toast]);

  return (
    <Styled.StatusMenu>
      <Styled.StatusMenuButton display="flex" alignItems="center">
        <FaceIcon style={ICON_STYLE} />
        프로필
<<<<<<< HEAD:src/components/common/header/LoginStatusMenu.tsx
      </MenuButton>
      <MenuList>
        <MenuItem>
          <UserNameText>
=======
      </Styled.StatusMenuButton>
      <Styled.StatusMenuList>
        <Styled.StatusMenuItem>
          <Styled.UserNameText>
>>>>>>> parent of dc475a7 (TableOfContents 생성 & 댓글 생성 폼 생성 & 이론 페이지 Tool 컴포넌트 생성 (#68)):src/components/UI/molecules/HeaderLoginStatusMenu/index.tsx
            {authState.username}
          </Styled.UserNameText>
          님 안녕하세요 👋
        </Styled.StatusMenuItem>
        <Styled.StatusMenuDivider />
        <Link href={PROFILE_PAGE_URL}>
          <Styled.StatusMenuItem>프로필</Styled.StatusMenuItem>
        </Link>
        <Styled.StatusMenuDivider />
        <Styled.StatusMenuItem onClick={logoutButtonHandler}>로그아웃</Styled.StatusMenuItem>
      </Styled.StatusMenuList>
    </Styled.StatusMenu>
  );
};

export default LoginStatusMenu;
