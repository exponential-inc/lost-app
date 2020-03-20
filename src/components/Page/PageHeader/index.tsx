import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import {iOSUIKit} from 'react-native-typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HeaderText} from '../../Text/Header';
import {K} from '../../../store/constants';
export const PageHeader = (props: {
  theme: any;
  title: string;
  type: string;
  bottomBar?: boolean;
  leadingButton?: string;
  actionButton?: string;
  navigation: any;
}) => {
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;
  return (
    <Layout
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 800 + (props.type === 'large' ? 36 : 10),
        marginBottom: 5,
        marginTop: -800,
        backgroundColor: themeColor.linkBG,
      }}>
      <StatusBar
        barStyle={props.theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      {props.type === 'large' ? (
        <Layout
          style={{
            paddingLeft: 30,
            paddingBottom: props.bottomBar === true ? 10 : 30,
            backgroundColor: 'transparent',
          }}>
          <Text
            style={{
              ...iOSUIKit.largeTitleEmphasizedObject,
              color: themeColor.lightText,
            }}>
            {props.title}
          </Text>
        </Layout>
      ) : (
        <Layout
          style={{
            paddingBottom: props.bottomBar === false ? 10 : 30,
            backgroundColor: 'transparent',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            {typeof props.leadingButton === 'string' ? (
              <Icon
                name={props.leadingButton}
                size={30}
                color={themeColor.lightText}
                onPress={props.navigation.goBack}
                style={{marginHorizontal: 20}}
              />
            ) : null}
          </View>
          <Text
            style={{
              ...iOSUIKit.bodyEmphasizedObject,
              color: themeColor.lightText,
              textAlign: 'center',
              flex: 3,
            }}>
            {props.title}
          </Text>
          <View style={{flex: 1}}>
          {typeof props.actionButton === 'string' ? (
              <Icon
                name={props.actionButton}
                size={30}
                color={themeColor.lightText}
                onPress={props.navigation.goBack}
                style={{marginHorizontal: 20}}
              />
            ) : null}
          </View>
        </Layout>
      )}
    </Layout>
  );
};
