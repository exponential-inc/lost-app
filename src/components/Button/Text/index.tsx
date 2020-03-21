import React from 'react';
import {ViewStyle, View, Text} from 'react-native';
import {iOSUIKit} from 'react-native-typography';

import {TouchableShadow} from '../../Shadow/Touchable';

export const TextButton = (props: {
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
        <Text style={{...iOSUIKit.bodyObject}}>{props.children}</Text>
      </TouchableShadow>
    </View>
  );
};
