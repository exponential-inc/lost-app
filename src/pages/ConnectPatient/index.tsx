import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {LoginButton} from '../../components/Button/Login';
import {PageHeader} from '../../components/Page/PageHeader';
import {K} from '../../store/constants';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import {View, Platform} from 'react-native';
import firebase from '@react-native-firebase/app'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import base64 from 'react-native-base64'


const ConnectPatientPageC = (props: any) => {
  const globalAny:any = global;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  console.log(props.deviceSize.width);
  const user = firebase.auth().currentUser;
  globalAny.code = 123456
  const dbRef = `/codeStore/${globalAny.code}`
  globalAny.type = 'patient'

  database()
  .ref(dbRef)
  .set({
    email: user.email
 })

  
  const SvgBackgroundGraphic = (svgProps: {isLarge?: boolean}) => (
    <View style={{position: 'absolute'}}>
      <Svg
        width={props.deviceSize.width}
        height={501}
        viewBox={`0 0 ${props.deviceSize.width} 501`}>
        {svgProps.isLarge ? (
          <Path
            d="M0 0v353.141c22.013 34.002 55.498 60.4 100.455 79.193 67.436 28.19 184.506-25.984 214.545-14.14 20.026 7.896 40.026 35.498 60 82.806V0H0z"
            fill={props.theme === 'dark' ? '#DDE7FF' : '#000'}
            fillRule="evenodd"
            fillOpacity={0.097}
            scaleX={props.deviceSize.width / 375}
          />
        ) : (
          <Path
            d="M0 0v186.141c22.013 34.002 55.498 60.4 100.455 79.193 67.436 28.19 184.506-25.984 214.545-14.14 20.026 7.896 40.026 35.498 60 82.806V0H0z"
            fill={props.theme === 'dark' ? '#DDE7FF' : '#000'}
            fillRule="evenodd"
            fillOpacity={0.097}
            scaleX={props.deviceSize.width / 375}
          />
        )}
      </Svg>
    </View>
  );


  return (
    <Layout style={{height: '100%', backgroundColor: themeColor.linkBG}}>
            <SvgBackgroundGraphic isLarge />
          <SvgBackgroundGraphic />
          <View style={{justifyContent: "center", height: '100%', marginTop: 100}}>
  <Text style={{textAlign:'center', marginTop:-280, ...themeFont.subheadE, color: themeColor.lightText}}><Text style={{...themeFont.smallTitleE, color: themeColor.lightText}}>Your code is </Text><Text style={{fontWeight: "bold", ...themeFont.smallTitleE, color: themeColor.contrast,}}>{globalAny.code}</Text><Text style={{...themeFont.smallTitleE, color: themeColor.lightText}}> {"\n"} Key this code into you're caretaker's phone</Text></Text>
          </View>
        </Layout>
  );
};



const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    deviceSize: state.deviceSize,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export const ConnectPatientPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectPatientPageC);
