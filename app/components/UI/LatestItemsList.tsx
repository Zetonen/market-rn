import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ILatestItems} from '../../assets/images/latest/latest';
import PostItem from './PostItem';
import {useRoute} from '@react-navigation/native';

const LatestItemsList = ({
  latestItemList,
  heading,
  isScroll = true,
}: {
  latestItemList: ILatestItems[];
  heading: string;
  isScroll?: boolean;
}) => {
  const {params} = useRoute();
  console.log(params);

  return (
    <View>
      <Text className="font-bold text-[20px] mb-1">{heading}</Text>
      <FlatList
        data={latestItemList}
        scrollEnabled={isScroll}
        numColumns={2}
        renderItem={({item}: {item: ILatestItems}) => <PostItem item={item} />}
      />
    </View>
  );
};

export default LatestItemsList;
