import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddPostScreen from '../screens/AddPostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import IconPost from '../assets/icons/tabs/addPostIcon';
import IconExplore from '../assets/icons/tabs/exploreIcon';
import IconHome from '../assets/icons/tabs/homeIcon';
import IconProfile from '../assets/icons/tabs/profileIcon';
import HomeScreenStackNav from './HomeScreenStackNav';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home-nav"
        component={HomeScreenStackNav}
        options={{
          tabBarIcon: IconHome,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: IconExplore,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarIcon: IconPost,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: IconProfile,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
