import React from 'react';
import {ViewStyle, View} from 'react-native';

export function ViewShadow(props: {
  theme: string;
  intensity?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View
      style={{
        elevation: (props.intensity || 2) * 5,
        shadowColor: props.theme === 'dark' ? 'black' : 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: (props.intensity || 1) * 3,
        ...props.style,
      }}>
      {props.children}
    </View>
  );
}
