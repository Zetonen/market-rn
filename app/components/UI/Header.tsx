import {Text, TextInput, View} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/icons/seachIcon';

const Header = () => {
  return (
    <View className="mb-6">
      <View className="mb-4 flex-row gap-5 items-center">
        <View className="bg-green-800 rounded-full justify-center items-center w-12 h-12">
          <Text className="text-white text-[18px] font-bold">A</Text>
        </View>
        <View>
          <Text className="text-[16px]">Welcome</Text>
          <Text className="text-[18px] font-bold">Andrew</Text>
        </View>
      </View>
      <View className="flex-row gap-x-2 bg-blue-50 p-3 rounded-full border-[2px] border-blue-200">
        <SearchIcon width="20" height="20" color="gray" />
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
};

export default Header;
