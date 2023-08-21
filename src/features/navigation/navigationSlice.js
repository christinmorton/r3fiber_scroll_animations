import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import playService from './playService';

const initialState = {
  currentPath: [],
  end: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// create a new note
export const pressPlay = createAsyncThunk(
  'press/play',
  async (noteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await noteService.createNote(noteData, token);
    } catch (error) {
      const message = error.response.data.error;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create a new note
export const pressEnd = createAsyncThunk(
  'press/end',
  async (noteData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      return await noteService.createNote(noteData, token);
    } catch (error) {
      const message = error.response.data.error;

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(pressPlay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pressPlay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.play = action.payload;
      })
      .addCase(pressPlay.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.play = null;
        state.message = action.payload;
      })
  },
});

export const { reset } = navigationSlice.actions;

export default navigationSlice.reducer;


// import { createContext, useState, useContext } from "react";

// const Context = createContext();

// export const PlayProvider = ({children}) => {
//   const [play, setPlay] = useState(false);
//   const [end, setEnd] = useState(false);
//   const [hasScroll, setHasScroll] = useState(false);

//   return (
//     <Context.Provider value={{
//       play,
//       setPlay,
//       end,
//       setEnd,
//       hasScroll,
//       setHasScroll
//     }}>
//       {children}
//     </Context.Provider>
//   )
// }

// export const usePlay = () => {
//   const context = useContext(Context);

//   if(context === undefined){
//     throw new Error("usePlay must be used within Play")
//   }

//   return context
// }