import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {AppDispatch} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import {getMyPosts} from '../store/dataSlice/exploreSlice/operations';
import {selectorExploreMyPosts} from '../store/dataSlice/exploreSlice/selectors';
import LatestItemsList from '../components/UI/LatestItemsList';

const MyProducts = () => {
  const posts = useSelector(selectorExploreMyPosts);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);
  return (
    <View className="pt-4">
      <LatestItemsList list={posts} heading="My Products" />
    </View>
  );
};

export default MyProducts;
