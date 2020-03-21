/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, {Fragment} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';
import {AppearanceProvider, Appearance} from 'react-native-appearance';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {K} from './src/store/constants';

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';
import {SettingsToggleThemePage} from './src/pages/SettingsToggleTheme';
import {FindPage} from './src/pages/Find';
import {SettingsPeoplePage} from './src/pages/SettingsPeople';

import {store} from './index.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsPageNest = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={SettingsPage} />
      <Stack.Screen name="Theme" component={SettingsToggleThemePage} />
      <Stack.Screen name="People" component={SettingsPeoplePage} />
    </Stack.Navigator>
  );
};

Appearance.addChangeListener(({colorScheme}) => {
  store.dispatch({type: 'SET_THEME_NATIVE', theme: colorScheme});
});

const App = (props: any) => {
  // const getSaved = async () => {
  //   let raw;
  //   try {
  //     raw = await AsyncStorage.multiGet(['themeMode']); //add on to the array for more
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   let retrivedObject = {};
  //   raw.map(value => {
  //     retrivedObject[value[0]] = value[1];
  //   });
  //   console.log(retrivedObject);
  //   return retrivedObject;
  // };
  // console.log(getSaved().retrivedObject);
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;
  return (
    <AppearanceProvider>
      <Fragment>
        <SafeAreaView
          style={{
            flex: 0,
            backgroundColor:
              props.theme === 'dark' ? themeColor.linkBG : themeColor.linkBG,
          }}
        />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor:
              props.theme === 'dark'
                ? themeColor.secondaryBG
                : themeColor.secondaryBG,
          }}>
          <ApplicationProvider
            mapping={mapping}
            theme={props.theme === 'dark' ? darkTheme : lightTheme}>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName={'Home'}
                screenOptions={({navigation, route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                      case 'Home':
                        iconName = focused
                          ? 'home-variant'
                          : 'home-variant-outline';
                        break;
                      case 'Settings':
                        iconName = focused ? 'settings' : 'settings-outline';
                        break;
                      case 'Find':
                        iconName = focused
                          ? 'map-marker'
                          : 'map-marker-outline';
                        break;
                      default:
                        iconName = 'alert-circle';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                  },
                })}
                tabBarOptions={{
                  activeTintColor: themeColor.contrast,
                  activeBackgroundColor: themeColor.secondaryBG,
                  inactiveTintColor: 'gray',
                  inactiveBackgroundColor: themeColor.secondaryBG,
                  style: {borderTopColor: themeColor.primaryBG},
                }}>
                <Tab.Screen name="Find" component={FindPage} />
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Settings" component={SettingsPageNest} />
              </Tab.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </SafeAreaView>
      </Fragment>
    </AppearanceProvider>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setThemeNative: (theme: string) =>
      dispatch({type: 'SET_THEME_NATIVE', theme: theme}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
