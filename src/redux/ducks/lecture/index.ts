import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'lecture';

const initialState = {
  currentLectureId: 0, // 현재 Lecture ID
  clearSlideNumber: 0, // 클리어 한 슬라이드의 개수
  currentSlideNumber: 0, // 현재 슬라이드의 번호
  slideCount: 0, // 체크 버튼을 확인하려고 만든 변수
};

export const lectureSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    initial: () => initialState,
    initialSlideCount: (state, action) => {
      state.slideCount = action.payload.slideCount;
      state.currentLectureId = action.payload.currentLectureId;
    },
    initialClearAndSlideCount: (state, action: PayloadAction<number>) => {
      state.clearSlideNumber = action.payload;
    },
    changeSlideNumber: (state, action: PayloadAction<number>) => {
      state.currentSlideNumber = action.payload;
    },
    goOneStep: (state) => {
      state.clearSlideNumber += 1;
      state.currentSlideNumber += 1;
    },
    reset: (state) => {
      state.clearSlideNumber = 0;
      state.currentSlideNumber = 0;
    },
  },
});

export const {
  initial,
  changeSlideNumber,
  goOneStep,
  initialSlideCount,
  initialClearAndSlideCount,
  reset,
} = lectureSlice.actions;

export default lectureSlice.reducer;
