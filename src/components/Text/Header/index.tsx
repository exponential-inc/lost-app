import React from 'react';
import {Platform, TextStyle} from 'react-native';
import {Text} from '@ui-kitten/components';

export const HeaderText = (props: {children?: string, color?: string, style?: TextStyle }) => {
  return (
    <Text
      style={{
        color: props.color ?? 'black',
        lineHeight: 41,
        fontSize: 34,
        ...Platform.select({
          android: {
            // fontFamily: 'Montserrat-Black',
          },
          ios: {
            // fontFamily: 'Montserrat',
            fontWeight: '700',
          },
        }),
        ...props.style,
      }}>
      {props.children ?? ''}
    </Text>
  );
};