import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPost = createAsyncThunk(
  'explore/getPost',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/posts/last');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
export const getCategoryPosts = createAsyncThunk(
  'explore/getCategoryPosts',
  async (categoryName, thunkAPI) => {
    try {
      const res = await axios.get(`/posts/category/${categoryName}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
export const getMyPosts = createAsyncThunk(
  'explore/getMyPosts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/posts`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
