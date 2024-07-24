import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        className="w-full h-[400px] object-cover"
        source={require('../assets/images/login.png')}
      />
      <View className="p-6 bg-white mt-[-20px] rounded-3xl shadow-md">
        <Text className="text-[30px] font-bold">Community Marketplace</Text>
        <Text className="text-[18px] text-slate-500 mt-6">
          Buy sell Marketplace where you can sell old item and make real money
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('authentication')}
          className="p-4 rounded-full bg-blue-500 mt-20">
          <Text className="text-center text-[18px] text-white">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
