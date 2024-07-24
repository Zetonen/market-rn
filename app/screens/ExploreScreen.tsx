import {View} from 'react-native';
import React, {useEffect} from 'react';
import {getPost} from '../store/dataSlice/exploreSlice/operations';
import {AppDispatch} from '../store';
import {useDispatch, useSelector} from 'react-redux';
import LatestItemsList from '../components/UI/LatestItemsList';
import {selectorExplorePosts} from '../store/dataSlice/exploreSlice/selectors';

const ExploreScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector(selectorExplorePosts);
  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <View className="pt-4 px-2">
      <LatestItemsList list={posts} heading="Latest Items" isScroll={false} />
    </View>
  );
};

export default ExploreScreen;
