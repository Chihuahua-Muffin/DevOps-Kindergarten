export type PageName = 'plan' | 'code' | 'build' | 'test' | 'release' | 'deploy' | 'operate' | 'monitor';

// pageId는 실습 pageName는 이론입니다.
export interface Comment {
  content: string;
  pageId: number | null;
  pageName: PageName | '';
  parentId?: number; // 대댓글
  userId: number;
}
