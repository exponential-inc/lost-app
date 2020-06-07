import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {LoginButton} from '../../components/Button/Login';
import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {Layout} from '@ui-kitten/components';
import firebase from '@react-native-firebase/app'



const ManageAccountPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  
  return (
    <Layout style={{height: '100%', backgroundColor: themeColor.linkBG}}>
       <PageHeader
        title="Account"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Settings')}
        style = {{zIndex: 10}}
      />
    <View>
  <Text>Welcome!</Text>
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