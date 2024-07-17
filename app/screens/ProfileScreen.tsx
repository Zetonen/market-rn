import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {profileList, IProfileListItem} from '../assets/icons/profile/profile';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const onMenuPress = (item: IProfileListItem) => {
    navigation.navigate(item.path);
  };
  return (
    <View className="p-5 flex-1 items-center">
      <View className="bg-green-800 rounded-full justify-center items-center w-[100px] h-[100px]">
        <Text className="text-white text-[60px] font-bold">A</Text>
      </View>
      <View>
        <Text className="mt-2 text-center text-[25px] font-bold">Andrew</Text>
        <Text className="mt-2 text-[18px] text-gray-500">
          explore@gmail.com
        </Text>
      </View>
      <FlatList
        className="w-full mt-4"
        data={profileList}
        numColumns={2}
        renderItem={({item}) => {
          const Icon = item.component;
          return (
            <TouchableOpacity
              onPress={() => onMenuPress(item)}
              className="flex-1 items-center justify-center m-1 p-2 bg-blue-50 border-[1px] border-blue-400 rounded-lg">
              <Icon width="30" height="30" />
              <Text className="text-[12px] mt-2">{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProfileScreen;
