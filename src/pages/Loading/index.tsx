import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {LoginButton} from '../../components/Button/Login';
import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {Layout} from '@ui-kitten/components';
import firebase from '@react-native-firebase/app'



const App = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    props.navigation.navigate('Signup');
  }else if (user){
    props.navigation.navigate('Home');
  }
  return null;
}




const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const AccountLoadingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);