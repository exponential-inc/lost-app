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
import {connect, ReactReduxContextValue} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ApplicationProvider,
  Layout,
  Text,
} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {SafeAreaView} from 'react-native';

import {K} from './src/store/constants';

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';
import {FindPage} from './src/pages/Find';

const Tab = createBottomTabNavigator();

const App = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor:
            props.theme === 'dark'
              ? themeColor.secondaryBG
              : themeColor.secondaryBG,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor:
            props.theme === 'dark'
              ? themeColor.primaryBG
              : themeColor.primaryBG,
        }}>
        <ApplicationProvider
          mapping={mapping}
          theme={props.theme === 'dark' ? darkTheme : lightTheme}>
          <NavigationContainer>
            <Tab.Navigator
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
                      iconName = focused ? 'map-marker' : 'map-marker-outline';
                      break;
                    default:
                      iconName = 'alert-circle';
                  }
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: themeColor.contrast,
                activeBackgroundColor: themeColor.primaryBG,
                inactiveTintColor: 'gray',
                inactiveBackgroundColor: themeColor.primaryBG,
              }}>
              <Tab.Screen name="Find" component={FindPage} />
              <Tab.Screen name="Home" component={HomePage} />
              <Tab.Screen name="Settings" component={SettingsPage} />
            </Tab.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaView>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
