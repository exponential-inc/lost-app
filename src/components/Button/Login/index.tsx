import React from 'react';
import {
  ViewStyle,
  View,
  Text,
  Platform,
  ColorPropType,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';

const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
export const LoginButton = (props: {
  theme: string;
  title: string;
  onPress?(): void;
  style?: ViewStyle;
  color?: string;
  icon?: string;
}) => {
  return (
    <View onTouchEnd={props.onPress}>
      <TouchableShadow
        theme={props.theme}
        style={{
          backgroundColor: 'white',
          alignSelf: 'center',
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 100,
          width: '70%',
          height: 60,
          margin: 5,
          ...props.style,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          {props.icon !== undefined ? (
            <Icon
              name={props.icon}
              size={20}
              style={{color: props.color, marginRight: 20}}
            />
          ) : null}
          <Text style={{...themeFont.body, color: props.color}}>
            {props.title}
          </Text>
        </View>
      </TouchableShadow>
    </View>
  );
};
