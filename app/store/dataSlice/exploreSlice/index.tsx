import {createSlice} from '@reduxjs/toolkit';
import {getCategoryPosts, getMyPosts, getPost} from './operations';
import {IInitialState} from './type';

const initialState: IInitialState = {
  page: 1,
  posts: [],
  categoryPosts: [],
  myPosts: [],
};

const slice = createSlice({
  name: 'explore',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getPost.pending, (state, action) => {})
      .addCase(getPost.fulfilled, (state, action) => {
        console.log('getPost', 'f', action.payload);
        state.posts = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        console.log('getPost', 'r', action);
      })
      .addCase(getCategoryPosts.pending, (state, action) => {
        console.log('getCategoryPosts', 'p', action);
      })
      .addCase(getCategoryPosts.fulfilled, (state, action) => {
        console.log('getCategoryPosts', 'f', action.payload);
        state.categoryPosts = action.payload;
      })
      .addCase(getCategoryPosts.rejected, (state, action) => {
        console.log('getCategoryPosts', 'r', action);
      })
      .addCase(getMyPosts.pending, (state, action) => {
        console.log('getMyPosts', 'p', action);
      })
      .addCase(getMyPosts.fulfilled, (state, action) => {
        console.log('getMyPosts', 'f', action);
        state.myPosts = action.payload;
      })
      .addCase(getMyPosts.rejected, (state, action) => {
        console.log('getMyPosts', 'r', action);
      }),
});
export const exploreReducer = slice.reducer;
