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
import FaceIcon from '@mui/icons-material/Face';

import { useAppSelector, useAppDispatch } from '#/hooks/useRedux';
import { logoutAsync } from '#/redux/ducks/auth';
import storage from '#/lib/storage';
import { LOGOUT_ASYNC_FULFILLED, LOGOUT_ASYNC_REJECTED } from '#/redux/ducks/auth/actions';
import { initial as initialLecture } from '#/redux/ducks/lecture';
import { initial as initialUser } from '#/redux/ducks/user';
import {
  ICON_STYLE,
  PROFILE_PAGE_URL,
  LANDING_PAGE_URL,
  TOAST_DURATION,
  TOAST_STATUS_ERROR,
  REFRESH_TOKEN,
} from '#/constants';

const UserNameText = chakra(Text, {
  baseStyle: {
    fontWeight: '600',
  },
});

const LoginStatusMenu = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const toast = useToast();

  const logoutButtonHandler = useCallback(async () => {
    const result = await dispatch(logoutAsync(authState.username));
    dispatch(initialLecture());
    dispatch(initialUser());

    if (result.type === LOGOUT_ASYNC_FULFILLED) {
      storage.remove(REFRESH_TOKEN);
      router.replace(`/${LANDING_PAGE_URL}`);
      toast({
        title: '로그아웃 되었습니다!',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    } else if (result.type === LOGOUT_ASYNC_REJECTED) {
      toast({
        title: '로그아웃에 실패했습니다!',
        status: TOAST_STATUS_ERROR,
        duration: TOAST_DURATION,
        isClosable: true,
      });
    }
  }, [dispatch, authState.username, router, toast]);

  return (
    <Menu>
      <MenuButton display="flex" alignItems="center" as={Button}>
        <FaceIcon style={ICON_STYLE} />
        {authState.username}
      </MenuButton>
      <MenuList>
        <MenuItem>
          <UserNameText>
            {authState.username}
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
