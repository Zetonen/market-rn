import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from './type';

const initialState: InitialState = {
  activeScreen: 'Home',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setActiveScreen: (state, action: PayloadAction<string | null>) => {
      state.activeScreen = action.payload;
    },
  },
});
export const appReducer = appSlice.reducer;
