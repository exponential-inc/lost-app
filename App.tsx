/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { reducer } from './src/store/reducer';
import { createStore } from 'redux'

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';

const store = createStore(reducer);

const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
