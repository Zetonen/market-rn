import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectActiveScreen} from './store/dataSlice/app/selectors';
import {AppDispatch} from './store';
import {login, register} from './store/dataSlice/authSlice/operations';

const initialLoginValue = {
  email: '',
  password: '',
};
const initialSignUpValue = {
  email: '',
  password: '',
  userName: '',
};

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const a = useSelector(selectActiveScreen);
  console.log(a);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf884ad570b50659c5fa2dc2cfb20ecf&auto=format&fit=crop&w=1000&q=100',
        }}>
        {!isLogin ? (
          <View style={styles.signup}>
            <Text style={styles.formTitle}>Sign up</Text>
            <Formik
              initialValues={initialSignUpValue}
              onSubmit={value => {
                console.log(value);
                dispatch(register(value));
              }}>
              {({handleChange, handleSubmit, values}) => (
                <View>
                  <View style={styles.formHolder}>
                    <TextInput
                      style={styles.input}
                      value={values?.name}
                      placeholder="Name"
                      onChangeText={handleChange('userName')}
                    />
                    <TextInput
                      style={styles.input}
                      value={values?.email}
                      placeholder="Email"
                      keyboardType="email-address"
                      onChangeText={handleChange('email')}
                    />
                    <TextInput
                      style={styles.input}
                      value={values?.password}
                      placeholder="Password"
                      secureTextEntry={true}
                      onChangeText={handleChange('password')}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitBtn}>
                    <Text style={styles.btnText}>Sign up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleToggle}>
                    <Text style={styles.switchText}>or Log in</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        ) : (
          <View style={styles.login}>
            <View>
              <Text style={styles.formTitle}>Log in</Text>
              <Formik
                initialValues={initialLoginValue}
                onSubmit={value => {
                  dispatch(login(value));
                }}>
                {({handleChange, handleSubmit, values}) => (
                  <View>
                    <View style={styles.formHolder}>
                      <TextInput
                        style={styles.input}
                        value={values?.email}
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                      />
                      <TextInput
                        style={styles.input}
                        value={values?.password}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.submitBtn}>
                      <Text style={styles.btnText}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToggle}>
                      <Text style={styles.switchText}>or Sign up</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E8EE',
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 150,
  },
  formStructor: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 20,
  },
  signup: {
    width: '100%',
  },
  login: {
    width: '100%',
  },
  formTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
  },
  formHolder: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
    padding: 8,
  },
  submitBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
