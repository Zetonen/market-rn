import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ILatestItems} from '../../assets/images/latest/latest';
import {useNavigation} from '@react-navigation/native';

const PostItem = ({item}: {item: ILatestItems}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('product-details', {
          product: item,
        });
      }}
      className="flex-1 justify-between m-2 p-2 border-[1px] border-slate-200 rounded-lg">
      <View>
        <Image className="w-full h-[170px] rounded-lg" source={item.uri} />
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
