import {ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/UI/Header';
import Slider from '../components/UI/Slider';
import Categories from '../components/UI/Categories';
import LatestItemsList from '../components/UI/LatestItemsList';
import {latest} from '../assets/images/latest/latest';

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 pt-4 px-6 bg-white">
      <Header />
      <Slider />
      <Categories />
      <LatestItemsList latestItemList={latest} heading="Latest Items" />
    </ScrollView>
  );
};

export default HomeScreen;
