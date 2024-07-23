import {createAsyncThunk} from '@reduxjs/toolkit';
import {API_BASE_URL} from '../../../constans/global';
import axios from 'axios';
import {RootState} from '../../index';
import {ILogin, IRegister, Token} from './type';

axios.defaults.baseURL = API_BASE_URL;

const setAuthHeader = (token: Token): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'users/register',
  async (userData: IRegister, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const login = createAsyncThunk(
  'users/login',
  async (userData: ILogin, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', userData);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'users/refresh',
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const token = state.auth.accessToken;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const logout = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
