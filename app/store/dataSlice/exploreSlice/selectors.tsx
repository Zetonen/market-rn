import {RootState} from '../../index';

export const selectorExplorePosts = (state: RootState) => state.explore.posts;
export const selectorExploreCategoryPosts = (state: RootState) =>
  state.explore.categoryPosts;
export const selectorExploreMyPosts = (state: RootState) =>
  state.explore.myPosts;
