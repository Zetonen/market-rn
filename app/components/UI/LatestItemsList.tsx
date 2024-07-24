import {View, Text, FlatList} from 'react-native';
import React from 'react';
import PostItem from './PostItem';
import {IPost} from '../../store/dataSlice/exploreSlice/type';

const LatestItemsList = ({
  list,
  heading,
  isScroll = true,
}: {
  list: IPost[];
  heading: string;
  isScroll?: boolean;
}) => {
  return (
    <View>
      <Text className="font-bold text-[20px] mb-1 px-4">{heading}</Text>

      {list.length > 0 && (
        <FlatList
          data={list}
          scrollEnabled={isScroll}
          numColumns={2}
          renderItem={({item}: {item: IPost}) => {
            console.log(item);

            return <PostItem item={item} key={item._id} />;
          }}
        />
      )}
    </View>
  );
};

export default LatestItemsList;
