import React from 'react';
import {connect} from 'react-redux';

import {LoginButton} from '../../components/Button/Login';
import {PageHeader} from '../../components/Page/PageHeader';
import {K} from '../../store/constants';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import {View} from 'react-native';
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import base64 from 'react-native-base64'


const dbExistCheckC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  console.log(props.deviceSize.width);
  const user = firebase.auth().currentUser;
  const caretakerRef = `/caretakers/${base64.encode(`${user.email}`)}`
  const patientRef = `/patients/${base64.encode(`${user.email}`)}`
  const email = user.email.replace(".", ",")

  database()
  .ref(caretakerRef)
  .once('value')
  .then(snapshot => {
    if (snapshot.exists()) {
      props.navigation.navigate('Home')
      console.log(snapshot.val());
      return null;
    } else {
      database()
      .ref(patientRef)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          props.navigation.navigate('Home')
          console.log(snapshot.val());
          return null;
        } else {
            props.navigation.navigate('POrC')
            console.log(snapshot.val());
            return null;
        }
      }  
      )
    }
  }  
  )
  return null;
}



const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    deviceSize: state.deviceSize,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const dbExistCheck = connect(
  mapStateToProps,
  mapDispatchToProps,
)(dbExistCheckC);
