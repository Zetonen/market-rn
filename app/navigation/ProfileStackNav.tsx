import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import MyProducts from '../screens/MyProducts';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();
const ProfileScreenStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="profile-tab" component={ProfileScreen} />
      <Stack.Screen name="my-products" component={MyProducts} />
      <Stack.Screen name="product-details" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ProfileScreenStackNav;
