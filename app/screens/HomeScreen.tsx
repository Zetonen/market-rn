import {View} from 'react-native';
import React from 'react';
import Header from '../components/UI/Header';
import Slider from '../components/UI/Slider';
import Categories from '../components/UI/Categories';
// import LatestItemsList from '../components/UI/LatestItemsList';

const HomeScreen = () => {
  return (
    <View className="flex-1 pt-4 px-6 bg-white">
      <Header />
      <Slider />
      <Categories />
      {/* <LatestItemsList heading="Latest Items" isScroll={false} /> */}
    </View>
  );
};

export default HomeScreen;
