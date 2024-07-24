import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import LatestItemsList from './LatestItemsList';
import {useDispatch, useSelector} from 'react-redux';
import {selectorExploreCategoryPosts} from '../../store/dataSlice/exploreSlice/selectors';
import {AppDispatch} from '../../store';
import {getCategoryPosts} from '../../store/dataSlice/exploreSlice/operations';

const ItemList = () => {
  const {params} = useRoute();
  const dispatch: AppDispatch = useDispatch();
  console.log(params);
  useEffect(() => {
    dispatch(getCategoryPosts(params?.category));
  }, [params]);

  const posts = useSelector(selectorExploreCategoryPosts);

  return (
    <View className="pt-2">
      {posts.length > 0 ? (
        <LatestItemsList list={posts} heading="" />
      ) : (
        <Text className="mt-24 p-5 text-[20px] text-gray-400 text-center">
          Not Found Post
        </Text>
      )}
    </View>
  );
};

export default ItemList;
