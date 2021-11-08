export type Role = 'ROLE_ADMIN' | 'ROLE_STUDENT' | 'ROLE_EDUCATOR';

export interface User {
  username: string;
  userId: number;
  authority: Role[] | null;
  isLogin: boolean;
}

export interface LectureProgress {
  count: number;
  lectureId: number;
  progressRate: number;
}
