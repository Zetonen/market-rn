import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialState} from './type';
import {login, logout, refreshUser, register} from './operations';

const initialState: InitialState = {
  accessToken: null,
  isAuthenticated: false,
  userName: '',
  userEmail: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action: PayloadAction<string>) => {})
      .addCase(register.fulfilled, (state, action) => {
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
        state.userName = action.payload.user.userName;
        state.userEmail = action.payload.user.email;
      })
      .addCase(register.rejected, (state, action) => {
        console.log('action r', action);
      })

      .addCase(login.pending, (state, action) => {
        console.log('login p', action);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log('login f', action);
        state.accessToken = action.payload.token;
        state.isAuthenticated = true;
        state.userName = action.payload.user.userName;
        state.userEmail = action.payload.user.email;
      })
      .addCase(login.rejected, (state, action) => {
        console.log('login r', action);
      })
      .addCase(refreshUser.pending, (state, action) => {
        console.log('refreshUser p', action);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        console.log('refreshUser f', action);
        state.isAuthenticated = true;
        state.userEmail = action.payload.email;
        state.userName = action.payload.userName;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        console.log('refreshUser r', action);
      })
      .addCase(logout.pending, (state, action) => {
        console.log('logout p', action);
      })
      .addCase(logout.fulfilled, (state, action) => {
        console.log('logout f', action);
        state.accessToken = null;
        state.isAuthenticated = false;
        state.userName = '';
        state.userEmail = '';
      })
      .addCase(logout.rejected, (state, action) => {
        console.log('logout r', action);
      }),
});
export const authReducer = authSlice.reducer;
console.log(authSlice);
