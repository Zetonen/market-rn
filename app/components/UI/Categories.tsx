import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {categoriesList} from '../../assets/icons/categories/categoriesIcons';

const Categories = ({list}) => {
  return (
    <View className="mb-2">
      <Text className="font-bold text-[20px] mb-1">Categories</Text>
      {/* <FlatList
        data={list}
        numColumns={4}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.lable}</Text>
            </View>
          );
        }}
      /> */}
      <FlatList
        data={categoriesList}
        numColumns={4}
        renderItem={({item}) => {
          const Icon = item.component;
          return (
            <TouchableOpacity className="flex-1 items-center justify-center m-1 p-2 h-[80px] bg-blue-50 border-[1px] border-blue-200 rounded-lg">
              <Icon width="40" height="40" />
              <Text className="text-[12px] mt-1">{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
