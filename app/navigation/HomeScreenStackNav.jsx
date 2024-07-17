import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemList from '../components/UI/ItemList';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();
const HomeScreenStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home-tab" component={HomeScreen} />
      <Stack.Screen name="item-list" component={ItemList} />
      <Stack.Screen name="product-details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default HomeScreenStackNav;
