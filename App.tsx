/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Entrypoint from './app/Entrypoint';
import {SafeAreaView, StyleSheet} from 'react-native';
import {persistor, store} from './app/store/index';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Entrypoint />
            {/* <LoginScreen />  */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
