import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';




import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';
import {ContentCard} from '../../components/Card/Content';
import {LoginButton} from '../../components/Button/Login';
import {SafeAreaView, View, Dimensions} from 'react-native';

const HomePageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
  var loggedIn = null;
  async function onGoogleButtonPress() {

    const { idToken } = await GoogleSignin.signIn();
  
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    return auth().signInWithCredential(googleCredential);

  }
  GoogleSignin.configure({
    webClientId: '1016139682272-62ol6b1c8phm74m4p059mmutov96prhu.apps.googleusercontent.com',
  });


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
    loggedIn = false
  }else if (user){
    loggedIn = true  
  }
  if (loggedIn == true){
  return (
    <Layout style={{height: '100%'}}>
      <ScrollView>
        <PageHeader
          title="Home"
          theme={props.theme}
          type="large"
          navigation={props.navigation}
        />
        <Layout style={{marginHorizontal: 20}}>
          <ContentCard theme={props.theme} title='Finish Setup' body='Follow these steps to finish setup.' backgroundColor={themeColor.red} firstInPage/>
        </Layout>
      </ScrollView>
    </Layout>
  );}
  if (loggedIn == false){
    // this.props.navigator.toggleNavBar({
    //   to: 'hidden'
    // });
    // return (
    //   <Layout style={{height: '100%', backgroundColor: themeColor.linkBG}}>
    //     <SvgBackgroundGraphic isLarge />
    //     <SvgBackgroundGraphic />
    //     <View style={{justifyContent: "center", height: '100%', marginTop: 100}}>
    //       <LoginButton
    //         title="Login With Apple"
    //         theme={props.theme}
    //         icon="apple"
    //         style={{backgroundColor: themeColor.black}}
    //         color={themeColor.lightText}
    //       />
    //       <LoginButton
    //         title="Login With Google"
    //         theme={props.theme}
    //         icon="google"
    //         onPress={() => onGoogleButtonPress()}
    //       />
    //     </View>
    //   </Layout>
    // );
    props.navigation.navigate('Signup')
    return null;
}
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);
