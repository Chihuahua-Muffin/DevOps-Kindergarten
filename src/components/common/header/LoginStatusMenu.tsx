import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  chakra,
  Text,
} from "@chakra-ui/react"
import FaceIcon from '@material-ui/icons/Face';

import { useLoginState, useLoginDispatch } from '#/contexts/LoginContext';
import {
  ICON_STYLE,
  LOGOUT_ACTION,
} from '#/constants';

const UserNameText = chakra(Text, {
  baseStyle: {
    fontWeight: '600',
  },
});

const LoginStatusMenu = () => {
  const loginState = useLoginState();
  const loginDispatch = useLoginDispatch();

  const logoutButtonHandler = () => {
    loginDispatch({ type: LOGOUT_ACTION })
  }

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
        <MenuItem>프로필</MenuItem>
        <MenuDivider />
        <MenuItem onClick={logoutButtonHandler}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default LoginStatusMenu;
