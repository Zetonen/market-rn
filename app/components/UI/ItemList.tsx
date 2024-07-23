import {Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {latest} from '../../assets/images/latest/latest';
import LatestItemsList from './LatestItemsList';

const ItemList = () => {
  const {params} = useRoute();
  const filterList = latest.filter(item => item.category === params?.category);

  return (
    <View className="pt-2">
      {filterList.length > 0 ? (
        <LatestItemsList latestItemList={filterList} heading="" />
      ) : (
        <Text className="mt-24 p-5 text-[20px] text-gray-400 text-center">
          Not Found Post
        </Text>
      )}
    </View>
  );
};

export default ItemList;
