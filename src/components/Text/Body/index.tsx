import React from 'react';
import {Platform, TextStyle} from 'react-native';
import {Text} from '@ui-kitten/components';

export const BodyText = (props: {children?: string, color?: string, style?: TextStyle}) => {
  return (
    <Text
      style={{
        ...props.style,
        color: props.color ?? 'black',
        lineHeight: 41,
        fontSize: 18,
        ...Platform.select({
          android: {
            fontFamily: 'Montserrat 500',
          },
          ios: {
            fontFamily: 'Montserrat',
            fontWeight: '500',
          },
        }),
      }}>
      {props.children ?? ''}
    </Text>
  );
};