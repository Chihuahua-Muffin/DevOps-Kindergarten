import axios from 'axios';
import type { Comment, PageName } from '#/types';

const POST_COMMENT_API_URL = '/api/comment'; // POST
const PUT_COMMENT_API_URL = '/api/comment'; // PUT
const DELETE_COMMENT_API_URL = '/api/comment'; // PUT, DELETE
const GET_COMMENTS_API_URL = '/api/comments'; // GET
const GET_USER_COMMENTS_API_URL = '/api/comments'; // GET

// usage: postCommentAPI({content, pageId(null or number), pageName, parentId, userId});
// eslint-disable-next-line max-len
export const postCommentAPI = ({ content, pageId, pageName, parentId, userId }: Comment) => axios.post(POST_COMMENT_API_URL, {
  content,
  pageId,
  pageName,
  parentId,
  userId,
});

// usage: putCommentAPI(id, content);
export const putCommentAPI = (commentId: number, content: string) => axios.put(`${PUT_COMMENT_API_URL}/${commentId}`, {
  content,
});

// usage: deleteCommentAPI(123);
export const deleteCommentAPI = (commentId: number) => axios.delete(`${DELETE_COMMENT_API_URL}/{${commentId}}`);

// usage: getCommentsAPI(null, 'test');
export const getCommentsAPI = (id: string | null, name: PageName | '') => {
  if (!id) return axios.get(`${GET_COMMENTS_API_URL}?name=${name}`);

  return axios.get(`${GET_COMMENTS_API_URL}?id=${id}`);
};

// usage: getUserCommentsAPI('admin');
export const getUserCommentsAPI = (username: string) => axios.get(`${GET_USER_COMMENTS_API_URL}/${username}`);
