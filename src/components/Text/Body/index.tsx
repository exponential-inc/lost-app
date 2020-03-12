import React from 'react';
import {Platform} from 'react-native';
import {Text} from '@ui-kitten/components';

export const BodyText = (props: {children?: string}) => {
  return (
    <Text
      style={{
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