import React from 'react';
import {ViewStyle, View, Text, Platform, ColorPropType} from 'react-native';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';

const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
export const GoogleLoginButton = (props: {
  theme: string;
  children: string;
  onPress?(): void;
  style?: ViewStyle;
}) => {
  return (
    <View style={{flex: 1, alignSelf: 'flex-start'}} onTouchEnd={props.onPress}>
      <TouchableShadow
        theme={props.theme}
        style={{
          ...props.style,
          backgroundColor: 'white',
          alignSelf: 'center',
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 10000,
        }}>
        <Text style={{...themeFont.body, color: 'black',}}>Login with Google</Text>
      </TouchableShadow>
    </View>
  );
};

export const AppleLoginButton = (props: {
    theme: string;
    children: string;
    onPress?(): void;
    style?: ViewStyle;
  }) => {
    return (
      <View style={{flex: 1, alignSelf: 'flex-start'}} onTouchEnd={props.onPress}>
        <TouchableShadow
          theme={props.theme}
          style={{
            ...props.style,
            backgroundColor: 'black',
            alignSelf: 'center',
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10000,
          }}>
          <Text style={{...themeFont.body, color: 'white',}}>Login with apple</Text>
        </TouchableShadow>
      </View>
    );
  };
