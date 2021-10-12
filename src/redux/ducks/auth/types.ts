export type Role = 'ROLE_ADMIN' | 'ROLE_STUDENT' | 'ROLE_EDUCATOR';

export interface AuthState {
  username: string;
  userId: number | null;
  authority: Role[] | null;
  isLogin: boolean;
}
