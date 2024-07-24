import {View, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {IImageSl, sliderImg} from '../../assets/images/slider/slider';

const Slider = () => {
  return (
    <View className="mb-2">
      <FlatList
        data={sliderImg}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: {item: IImageSl}) => {
          return (
            <View>
              <Image style={styles.image} source={item.uri} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Slider;
const styles = StyleSheet.create({
  image: {
    marginRight: 10,
    width: 330,
    height: 200,
    objectFit: 'cover',
  },
});
