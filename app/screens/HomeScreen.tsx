import {ScrollView, View} from 'react-native';
import React from 'react';
import Header from '../components/UI/Header';
import Slider from '../components/UI/Slider';
import {local_data} from './AddPostScreen';
import Categories from '../components/UI/Categories';
import LatestItemsList from '../components/UI/LatestItemsList';

const HomeScreen = () => {
  return (
    <ScrollView className="flex-1 pt-4 px-6 bg-white">
      <Header />
      <Slider />
      <Categories list={local_data} />
      <LatestItemsList />
    </ScrollView>
  );
};

export default HomeScreen;
