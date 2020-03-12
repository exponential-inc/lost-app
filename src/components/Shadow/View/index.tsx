import React from 'react';
import {ViewStyle, View} from "react-native";

import {ThemeContext} from "../../../functions/theme";

export function ViewShadow(props: {intensity?: number; children?: React.ReactNode; style?: ViewStyle}) {
  return (
    <ThemeContext.Consumer>
      {theme =>
        <View style={{
          elevation: (props.intensity || 2) * 5,
          shadowColor: theme.theme === 'light' ? "gray" : 'black',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: (props.intensity || 1) * 3,
          ...props.style
        }}>
          {props.children}
        </View>}
    </ThemeContext.Consumer>
  )
}
