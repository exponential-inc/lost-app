import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import {iOSUIKit} from 'react-native-typography';

import {HeaderText} from '../../Text/Header';
import {K} from '../../../store/constants';
export const PageHeader = (props: {
  theme: any;
  title: string;
  type: string;
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
            paddingBottom: 30,
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
            paddingBottom: 12,
            backgroundColor: 'transparent',
            width: '100%',
          }}>
          <Text
            style={{
              ...iOSUIKit.bodyEmphasizedObject,
              color: themeColor.lightText,
              width: '100%',
              textAlign: 'center',
            }}>
            {props.title}
          </Text>
        </Layout>
      )}
    </Layout>
  );
};
