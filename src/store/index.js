import { configureStore, createSlice } from '@reduxjs/toolkit';

import scrollingReducer from '../features/ScrollingAnimation/scrollingSlice';

const store = configureStore({
  reducer: {
    scrolling: scrollingReducer
  },
});

export { store };
