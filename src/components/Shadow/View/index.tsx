import React from 'react';
import {ViewStyle, View, Platform} from 'react-native';

import {K} from '../../../store/constants';
export function ViewShadow(props: {
  theme: string;
  intensity?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}) {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  return (
    <View
      style={{
        ...Platform.select({
          android: {
            elevation: (props.intensity || 2) * 5,
            backgroundColor: themeColor.secondaryBG,
          },
          ios: {
            shadowColor: props.theme === 'dark' ? 'black' : 'grey',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.5,
            shadowRadius: (props.intensity || 1) * 3,
          },
        }),
        ...props.style,
      }}>
      {props.children}
    </View>
  );
}
