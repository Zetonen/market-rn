import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import MyProducts from '../screens/MyProducts';

const Stack = createStackNavigator();
const ProfileScreenStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="profile-tab" component={ProfileScreen} />
      <Stack.Screen name="my-products" component={MyProducts} />
    </Stack.Navigator>
  );
};

export default ProfileScreenStackNav;
