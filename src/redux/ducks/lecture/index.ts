import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'lecture';

const initialState = {
  currentLectureId: 0, // 현재 Lecture ID
  clearSlideNumber: 0, // 클리어 한 슬라이드의 개수
  currentSlideNumber: 0, // 현재 슬라이드의 번호
  slideCount: 0, // 체크 버튼을 확인하려고 만든 변수
  terminalBuffer: '', // 터미널 안의 내용을 확인하기 위해 만든 변수
  currentCommandsList: [['']], // 현재 lecture의 command list
  currentCommands: [''], // 현재 슬라이드의 command list
  commandCount: 0, // 슬라이드의 몇번째 커맨드를 실행하였는지 체크하는 변수
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
      state.commandCount = 0;
    },
    goOneStep: (state) => {
      state.clearSlideNumber += 1;
      state.currentSlideNumber += 1;
      state.commandCount = 0;
    },
    reset: (state) => {
      state.clearSlideNumber = 0;
      state.currentSlideNumber = 0;
      state.commandCount = 0;
    },
    onChangeBuffer: (state, action: PayloadAction<string>) => {
      state.terminalBuffer = action.payload;
    },
    initialCommandList: (state, action: PayloadAction<string[][]>) => {
      state.currentCommandsList = action.payload;
      state.commandCount = 0;
    },
    changeCommandList: (state, action: PayloadAction<string[]>) => {
      state.currentCommands = action.payload;
      state.commandCount = 0;
    },
    clearCommand: (state) => {
      state.commandCount += 1;
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

  onChangeBuffer,

  initialCommandList,
  changeCommandList,
  clearCommand,
} = lectureSlice.actions;

export default lectureSlice.reducer;
