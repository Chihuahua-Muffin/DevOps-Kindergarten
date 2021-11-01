import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'lecture';

const initialState = {
  clearSlideNumber: 0,
  currentSlideNumber: 0,
};

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    changeSlideNumber: (state, action: PayloadAction<number>) => {
      state.currentSlideNumber = action.payload;
    },
    goOneStep: (state) => {
      state.clearSlideNumber += 1;
      state.currentSlideNumber += 1;
    },
  },
});

export const {
  changeSlideNumber,
  goOneStep,
} = authSlice.actions;

export default authSlice.reducer;
