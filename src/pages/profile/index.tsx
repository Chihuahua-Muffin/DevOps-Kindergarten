import React from 'react';
import { useLoginState } from '#/contexts/LoginContext';

const ProfilePage = () => {
  const loginState = useLoginState();
  return (
    <div>
      {loginState.username}
      프로필 페이지 입니다.
    </div>
  );
};

export default ProfilePage;
