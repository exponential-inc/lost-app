import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
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
import { global } from 'core-js';


const InfoPageC = (props: any) => {
  const globalAny:any = global;
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  console.log(props.deviceSize.width);
  const user = firebase.auth().currentUser;
  const dbRef = `/caretakers/${base64.encode(`${user.email}`)}`
  const email = user.email.replace(".", ",")

  const patientRef = `/patients/${base64.encode(`${user.email}`)}`

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
            <LoginButton
              title="I am a patient"
              theme={props.theme}
              onPress={() => database()
                .ref(patientRef)
                .set({
                  email: user.email,
                  name: user.displayName,
                  location: null,
                  type: 'Patient',
                  connectedStatus: 'not connected',
                }).then(props.navigation.navigate('ConnectPatient'))}
            />
            <LoginButton
              title="I am a caretaker"
              theme={props.theme}
              onPress={() => database()
              .ref(dbRef)
              .set({
                email: user.email,
                name: user.displayName,
                type: 'Caretaker',
                connectedPatient: null
              }).then(props.navigation.navigate('ConnectCaretaker'))}
            />
          </View>
        </Layout>
      );
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

export const InfoPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoPageC);
