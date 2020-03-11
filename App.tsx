/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {reducer} from './src/store/reducer';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';

const store = createStore(reducer);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              switch (route.name) {
                case "Home":
                  iconName = focused ? 'home-variant' : 'home-variant-outline';
                  break;
                case 'Settings':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;
                default:
                  iconName = 'alert-circle';
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
