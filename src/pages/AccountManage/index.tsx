import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {LoginButton} from '../../components/Button/Login';
import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {Layout} from '@ui-kitten/components';
import { GoogleSignin } from '@react-native-community/google-signin';
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'


const ManageAccountPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const user = firebase.auth().currentUser;
  const dbRef = `/users/${user.email.replace(".", ",")}`
  return (
    <Layout style={{height: '100%', backgroundColor: themeColor.primaryBG}}>
       <PageHeader
        title="Account"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Settings')}
        style = {{zIndex: 10, backgroundColor: themeColor.linkBG}}
      />
    <View>
  <Text style={{fontSize: 20, alignSelf: "center", color: themeColor.darkText}}>Welcome {user.email}!</Text>
        <LoginButton
          title="Log Data"
          theme={props.theme}
          onPress={() => database()
            .ref(dbRef)
            .once('value')
            .then(snapshot => {
              console.log('User data: ', snapshot.val());
            })
          }
        />
      <LoginButton
          title="Log Out"
          theme={props.theme}
          onPress={() => auth().signOut()}
        />
    </View>
    </Layout>
  );
  }




const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const ManageAccountPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManageAccountPageC);