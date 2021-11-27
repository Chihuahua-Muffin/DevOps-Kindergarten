import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { LectureProgress } from '#/types/user';

const SLICE_NAME = 'user';

interface InitialStateProps {
  lectureProgress: { [lectureNumber: number]: LectureProgress }; // 클리어 한 슬라이드의 개수
  userIP: string;
}

const LECTURE_PROGRESS_INIT = {
  count: 0,
  lectureId: 0,
  progressRate: 0,
};

const initialState: InitialStateProps = {
  lectureProgress: {
    1: LECTURE_PROGRESS_INIT,
    2: LECTURE_PROGRESS_INIT,
  },
  userIP: '',
};

export const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    initial: () => initialState,
    initialUserLectureProgress: (state, action) => {
      state.lectureProgress = action.payload;
    },
    setUserIP: (state, action: PayloadAction<string>) => {
      state.userIP = action.payload;
    },
  },
});

export const {
  initial,
  initialUserLectureProgress,
  setUserIP,
} = userSlice.actions;

export default userSlice.reducer;
