export type PageName = 'plan' | 'code' | 'build' | 'test' | 'release' | 'deploy' | 'operate' | 'monitor';

// pageId는 실습 pageName는 이론입니다.
export interface CommentApiRequest {
  content: string;
  pageId: number | null;
  pageName: PageName | string;
  parentId: number | null; // 대댓글
  userId: number;
}

export interface Comment {
  commentId: number;
  content: string;
  username: string;
  createdDate: string;
  updatedDate: string;
  recommentList: Comment[];
}
