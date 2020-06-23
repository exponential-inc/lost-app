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
import firebase from '@react-native-firebase/app'
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {AppearanceProvider, Appearance} from 'react-native-appearance';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ApplicationProvider, Layout} from '@ui-kitten/components';
import {mapping, light as lightTheme, dark as darkTheme} from '@eva-design/eva';
import {SafeAreaView, View, Dimensions} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';

import {K} from './src/store/constants';

import {HomePage} from './src/pages/Home';
import {SettingsPage} from './src/pages/Settings';
import {SettingsThemePage} from './src/pages/SettingsTheme';
import {FindPage} from './src/pages/Find';
import {LandingPage} from './src/pages/Landing';
import {SettingsPeoplePage} from './src/pages/SettingsPeople';
import {AccountLoadingPage} from './src/pages/Loading'
import {ManageAccountPage} from './src/pages/AccountManage'
import {InfoPage} from './src/pages/Info'
import {ConnectPatientPage} from './src/pages/ConnectPatient'
import {dbExistCheck} from './src/pages/dbExistCheck'
import {ConnectCaretakerPage} from './src/pages/ConnectCaretaker'

import {store} from './index.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsPageNest = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
      <Stack.Screen name="Settings" component={SettingsPage} />
      <Stack.Screen name="Theme" component={SettingsThemePage} />
      <Stack.Screen name="People" component={SettingsPeoplePage} />
      <Stack.Screen name="Account" component={AccountLoadingPage} />
      <Stack.Screen name="Signup" component={LandingPage} />
      <Stack.Screen name="ManageAccount" component={ManageAccountPage} />
    </Stack.Navigator>
  );
};
const HomePageNest = () =>{
  return(
  <Stack.Navigator initialRouteName="Home" headerMode="none">
  <Stack.Screen name="Home" component={HomePage} />
  <Stack.Screen name="Signup" component={LandingPage} />
  <Stack.Screen name="POrC" component={InfoPage} />
  <Stack.Screen name="ConnectPatient" component={ConnectPatientPage} />
  <Stack.Screen name="ConnectCaretaker" component={ConnectCaretakerPage} />
  <Stack.Screen name="dbExistCheck" component={dbExistCheck} />
</Stack.Navigator>
);
}



Appearance.addChangeListener(({colorScheme}) => {
  store.dispatch({type: 'SET_THEME_NATIVE', theme: colorScheme});
});

Dimensions.addEventListener('change', () => store.dispatch({type: 'UPDATE_DEVICE_SIZE'}))

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
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  var config = {
    appId: "1:1016139682272:web:af60239d579fba6ab55b85",
    databaseURL: "https://lost-app-15eb8.firebaseio.com",
    projectId: "lost-app-15eb8",
    };
  firebase.initializeApp(config);
  if (!firebase.apps.length) {
  firebase.initializeApp(config);
  }
  
  
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
                  inactiveTintColor: `${themeColor.contrast}99`,
                  inactiveBackgroundColor: themeColor.secondaryBG,
                  style: {borderTopColor: themeColor.primaryBG},
                }}>
                <Tab.Screen name="Find" component={LandingPage} />
                <Tab.Screen name="Home" component={HomePageNest} />
                <Tab.Screen name="Settings" component={SettingsPageNest} />
              </Tab.Navigator>
            </NavigationContainer>
          </ApplicationProvider>
        </SafeAreaView>
      </Fragment>
    </AppearanceProvider>
  );}
  

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
