import { createSlice } from '@reduxjs/toolkit';

import type { LectureProgress } from '#/types/user';

const SLICE_NAME = 'user';

const LECTURE_PROGRESS_INIT = {
  count: 0,
  lectureId: 0,
  progressRate: 0,
};

const initialState: { lectureProgress: { [lectureNumber: number]: LectureProgress } } = {
  lectureProgress: {
    1: LECTURE_PROGRESS_INIT,
    2: LECTURE_PROGRESS_INIT,
  }, // 클리어 한 슬라이드의 개수
};

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    initial: () => initialState,
    initialUserLectureProgress: (state, action) => {
      state.lectureProgress = action.payload;
    },
  },
});

export const {
  initial,
  initialUserLectureProgress,
} = userSlice.actions;

export default userSlice.reducer;
