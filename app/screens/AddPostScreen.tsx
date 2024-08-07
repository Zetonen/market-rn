import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDefaultImage} from '../hook/useDefaultImage';
import {addPost} from '../store/apiSlice/operations';
import {readFile} from 'react-native-fs';
import {selectOneFile} from '../store/apiSlice';

export type ImageType = {
  uri: string;
  name: string;
  type: string;
};
export const local_data = [
  {
    value: 'Furniture',
    lable: 'Furniture',
  },
  {
    value: 'Jobs',
    lable: 'Jobs',
  },
  {
    value: 'Hobby',
    lable: 'Hobby',
  },
  {
    value: 'Clothing',
    lable: 'Clothing',
  },
  {
    value: 'Car',
    lable: 'Car',
  },
  {
    value: 'Food',
    lable: 'Food',
  },
  {
    value: 'Electronics',
    lable: 'Electronics',
  },
  {
    value: 'House',
    lable: 'House',
  },
];
const initialValue = {
  title: '',
  description: '',
  category: local_data[0].value,
  address: '',
  price: '',
  image: '',
};

const SelectCategories = ({setFieldValue}: any) => {
  const [category, setCategory] = useState(local_data[0].value);

  return (
    <Dropdown
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      maxHeight={200}
      value={category}
      data={local_data}
      valueField="value"
      labelField="lable"
      placeholder="Select categories"
      searchPlaceholder="Search..."
      onChange={({value}) => {
        setCategory(value);
        setFieldValue('category', value);
      }}
    />
  );
};

const AddPostScreen = () => {
  const [selectImageUri, setSelectImageUri] = useState('');
  const [selectImage, setSelectImage] = useState({});

  const imageSource = useDefaultImage(selectImageUri);
  useEffect(() => {
    console.log(selectImageUri);
  }, [selectImageUri]);
  const ImagePicker = async () => {
    const options = {
      mediaType: 'photo',
    };
    const result = (await launchImageLibrary(options as any)) as {
      assets: ImageType[];
    };
    console.log(result);
    setSelectImage(result.assets[0]);
    setSelectImageUri(result.assets[0].uri);
  };
  // const loadImageBase64 = async capturedImageURI => {
  //   try {
  //     const base64Data = await readFile(capturedImageURI, 'base64');
  //     return 'data:image/jpeg;base64,' + base64Data;
  //   } catch (error) {
  //     console.error('Error converting image to base64:', error);
  //   }
  // };
  return (
    <KeyboardAvoidingView>
      <ScrollView className="mx-8 pt-4">
        <Text className="mb-1 font-bold text-[24px]">Add New Post</Text>
        <Text className="mb-6 text-[16px] text-gray-500">
          Create New Post and Start Selling
        </Text>
        <TouchableOpacity
          className="mb-2"
          onPress={() => {
            ImagePicker();
          }}>
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
        <Formik
          initialValues={initialValue}
          onSubmit={async value => {
            // const img = await loadImageBase64(selectImage);
            console.log({...value, image: selectImage});
            const formData = {...value, image: selectImage};
            const data = new FormData();
            for (const key in formData) {
              data.append(key, formData[key]);
            }
            addPost(formData);
          }}>
          {({handleChange, handleSubmit, setFieldValue, values}) => (
            <View>
              <TextInput
                style={styles.input}
                value={values?.title}
                placeholder="Title"
                onChangeText={handleChange('title')}
              />
              <TextInput
                style={{...styles.input, ...styles.inputDesc}}
                value={values?.desc}
                placeholder="Description"
                numberOfLines={5}
                multiline={true}
                onChangeText={handleChange('description')}
              />
              <TextInput
                style={styles.input}
                value={values?.price}
                placeholder="Price"
                keyboardType="number-pad"
                onChangeText={handleChange('price')}
              />
              <TextInput
                style={styles.input}
                value={values?.address}
                placeholder="Address"
                onChangeText={handleChange('address')}
              />
              <SelectCategories setFieldValue={setFieldValue} />
              <TouchableOpacity
                onPress={handleSubmit}
                className="p-4 bg-blue-500 rounded-full">
                <Text className="text-white text-center text-[16px]">
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 17,
  },
  inputDesc: {
    height: 100,
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 30,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: 'cover',
  },
});

export default AddPostScreen;
