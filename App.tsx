/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, SafeAreaView } from 'react-redux';
import {reducer} from './src/store/reducer';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomNavigation, BottomNavigationTab, Layout, Text} from '@ui-kitten/components';

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';
import {FindPage} from './src/pages/Find';

const store = createStore(reducer);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({navigation, route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? 'home-variant' : 'home-variant-outline';
                  break;
                case 'Settings':
                  iconName = focused ? 'settings' : 'settings-outline';
                  break;
                case 'Find':
                  iconName = focused ? 'map-marker' : 'map-marker-outline';
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
          <Tab.Screen name="Find" component={FindPage} />
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
