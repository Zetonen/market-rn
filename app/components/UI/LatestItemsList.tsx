import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ILatestItems} from '../../assets/images/latest/latest';
import PostItem from './PostItem';

const LatestItemsList = ({
  latestItemList,
  heading,
}: {
  latestItemList: ILatestItems[];
  heading: string;
}) => {
  return (
    <View>
      <Text className="font-bold text-[20px] mb-1">{heading}</Text>
      <FlatList
        data={latestItemList}
        numColumns={2}
        renderItem={({item}: {item: ILatestItems}) => <PostItem item={item} />}
      />
    </View>
  );
};

export default LatestItemsList;
