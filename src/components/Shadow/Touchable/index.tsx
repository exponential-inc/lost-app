import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {connect} from 'react-redux';

export const TouchableShadow = (props: {
  intensity?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?(): void;
  theme: String
}) => {
  return (
    <TouchableOpacity
      style={{
        elevation: (props.intensity || 2) * 5,
        shadowColor: props.theme === 'dark' ? 'black' : 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: (props.intensity || 1) * 3,
        ...props.style,
      }}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}>
      {props.children}
    </TouchableOpacity>
  );
};
