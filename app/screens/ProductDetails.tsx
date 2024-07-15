import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const {params} = useRoute();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    params && setProduct(params.product);
    console.log(params);
  }, [params, setProduct]);

  return (
    <ScrollView>
      <Image className="w-full h-[350px]" source={product?.uri} />
      <View className="p-3">
        <Text className="text-[24px] font-bold">{product?.title}</Text>
        <View className="mt-1 p-1 w-[100px] bg-blue-200 rounded-full">
          <Text className="text-center text-blue-500 ">
            {product?.category}
          </Text>
        </View>
        <Text className="mt-2 text-[18px] font-bold">Description</Text>
        <Text className="text-[16px] text-gray-500">{product?.desc}</Text>
      </View>
      <View className="p-4 flex flex-row gap-x-3 items-center bg-blue-100">
        <View className="bg-green-800 rounded-full justify-center items-center w-12 h-12">
          <Text className="text-white text-[18px] font-bold">
            {product?.userImg}
          </Text>
        </View>
        <View>
          <Text className="text-[18px] font-bold">{product?.userName}</Text>
          <Text className="text-gray-500 text-[16px]">
            {product?.userEmail}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          //   Linking.openURL('https://www.google.com');
          //   Linking.openURL(`mailto:${product?.userEmail}`);
        }}
        className="z-40 m-2 p-3 bg-blue-500 rounded-full">
        <Text className="text-center text-white">Send Message</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetails;
