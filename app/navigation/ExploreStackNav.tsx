import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import ExploreScreen from '../screens/ExploreScreen';

const Stack = createStackNavigator();
const ExploreStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="explore-tab" component={ExploreScreen} />
      <Stack.Screen name="product-details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ExploreStackNav;
