import {RootState} from 'app/store';

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectUserName = (state: RootState) => state.auth.userName;
export const selectUserEmail = (state: RootState) => state.auth.userEmail;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
