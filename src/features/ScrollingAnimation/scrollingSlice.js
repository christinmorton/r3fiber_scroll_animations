import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import playService from './playService';

const initialState = {
  play: false,
  end: false,
  completed: false,
  hasScroll: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// export const setPlay = (state, action) => { }
// export const setEnd = (state, action) => { }
// export const setHasScroll = (state, action) => { }


export const scrollingSlice = createSlice({
  name: 'scrolling',
  initialState,
  reducers: {
    reset: (state) => initialState,
    setPlay: (state, action) => {
      state.play = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    setHasScroll: (state, action) => {
      state.hasScroll = action.payload;
    },
    setCompleted: (state, action) => {
      state.completed = action.payload;
    },
  },
  extraReducers: (builder) => {
    //   builder
    //     .addCase(pressPlay.pending, (state) => {
    //       state.isLoading = true;
    //     })
    //     .addCase(pressPlay.fulfilled, (state, action) => {
    //       state.isLoading = false;
    //       state.isSuccess = true;
    //       state.play = action.payload;
    //     })
    //     .addCase(pressPlay.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.isError = true;
    //       state.play = null;
    //       state.message = action.payload;
    //     })
  },
});

export const { reset, setPlay, setEnd, setHasScroll, setCompleted } = scrollingSlice.actions;

export default scrollingSlice.reducer;
