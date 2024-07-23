import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Authentication from '../Authentication';

const Stack = createStackNavigator();

const AuthenticatedStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="pre-login" component={LoginScreen} />
      <Stack.Screen name="authentication" component={Authentication} />
    </Stack.Navigator>
  );
};

export default AuthenticatedStackNav;
