import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILatestItems, latest} from '../../assets/images/latest/latest';
import PostItem from './PostItem';

const LatestItemsList = () => {
  return (
    <View>
      <Text className="font-bold text-[20px] mb-1">Latest Items</Text>
      <FlatList
        data={latest}
        numColumns={2}
        renderItem={({item}: {item: ILatestItems}) => (
          <PostItem
            uri={item.uri}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        )}
      />
    </View>
  );
};

export default LatestItemsList;
