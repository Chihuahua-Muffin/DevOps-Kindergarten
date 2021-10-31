import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const SLICE_NAME = 'lecture';

const initialState = {
  slideNumber: 0,
};

export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    changeSlideNumber: (state, action: PayloadAction<number>) => {
      state.slideNumber = action.payload;
    },
  },
});

export const { changeSlideNumber } = authSlice.actions;

export default authSlice.reducer;
