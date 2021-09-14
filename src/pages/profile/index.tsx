import React from 'react';
import { useAppSelector } from '#/hooks/useRedux';

const ProfilePage = () => {
  const authState = useAppSelector((state) => state.auth);
  return (
    <div>
      {authState.username}
      프로필 페이지 입니다.
    </div>
  );
};

export default ProfilePage;
