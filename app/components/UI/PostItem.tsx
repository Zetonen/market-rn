import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IPost} from '../../store/dataSlice/exploreSlice/type';
import {useDefaultImage} from '../../hook/useDefaultImage';

const PostItem = ({item}: {item: IPost}) => {
  const navigation = useNavigation();
  const imageSource = useDefaultImage(item.image);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('product-details', {
          product: item,
        });
      }}
      className="flex-1 justify-between m-2 p-2 border-[1px] border-slate-200 rounded-lg">
      <View>
        <Image
          className="w-full h-[170px] object-contain rounded-lg"
          source={imageSource}
        />
        <Text className="mt-2 font-bold text=[15px] ">{item.title}</Text>
        <Text className="font-bold text=[20px] text-blue-500">
          $ {item.price}
        </Text>
      </View>
      <View className="mt-1 p-1 px-3 w-[100px] bg-blue-200 rounded-full">
        <Text className="text-blue-500 text-center text-[12px]">
          {item.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
