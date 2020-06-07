import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {LoginButton} from '../../components/Button/Login';
import {PageHeader} from '../../components/Page/PageHeader';
import {K} from '../../store/constants';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

const LandingPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  console.log(props.deviceSize.width);

  GoogleSignin.configure({
    webClientId: '1016139682272-62ol6b1c8phm74m4p059mmutov96prhu.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {

    const { idToken } = await GoogleSignin.signIn();
  
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    return auth().signInWithCredential(googleCredential);

  }


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
       <PageHeader
        title="Login"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Settings')}
        style = {{zIndex: 10}}
      />
      <SvgBackgroundGraphic isLarge />
      <SvgBackgroundGraphic />
      <View style={{justifyContent: "center", height: '100%', marginTop: 100}}>
        <LoginButton
          title="Login With Apple"
          theme={props.theme}
          icon="apple"
          style={{backgroundColor: themeColor.black}}
          color={themeColor.lightText}
        />
        <LoginButton
          title="Login With Google"
          theme={props.theme}
          icon="google"
          onPress={() => onGoogleButtonPress()}
        />
        <LoginButton
          title="Set Up Later"
          theme={props.theme}
          color={themeColor.white}
          style={{backgroundColor: `${themeColor.contrast}11`}}
          onPress={() => props.navigation.navigate('Settings')}
        />
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

export const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPageC);
