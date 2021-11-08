import axios from 'axios';

import type { LectureProgress } from '#/types/user';

export const getUserAPI = () => axios.get('/api/user');

export const getUserLectureProgressAPI = (id: number) => axios.get(`/api/user/${id}/lecture`);

export const putUserLectureProgressAPI = (
  id: number,
  object: LectureProgress,
) => axios.put(`/api/user/${id}/lecture`, object);
