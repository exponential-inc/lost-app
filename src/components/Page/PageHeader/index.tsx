import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {K} from '../../../store/constants';
export const PageHeader = (props: {
  theme: string;
  title: string;
  type: string;
  bottomBar?: boolean;
  leadingButton?: string;
  onLeadingButtonPress?(): void;
  actionButton?: string;
  onActionButtonPress?(): void;
  navigation: any;
}) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
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
              ...themeFont.largeTitleE,
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
                onPress={props.onLeadingButtonPress}
                style={{marginHorizontal: 20}}
              />
            ) : null}
          </View>
          <Text
            style={{
              ...themeFont.bodyE,
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
                onPress={props.onActionButtonPress}
                style={{marginHorizontal: 20}}
              />
            ) : null}
          </View>
        </Layout>
      )}
    </Layout>
  );
};
