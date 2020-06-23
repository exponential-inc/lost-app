import React, {Component, useState} from 'react';
import { TextInput, ViewStyle, View } from 'react-native';



const NumericInput = (props: {
    title: string;
    output: string;
    style?: ViewStyle;
    color?: string;
    maxLength?: number;
  }) => {
    return(
        <View>
            <TextInput  
          placeholder={props.title}  
          underlineColorAndroid='transparent'  
          style={props.style}  
         keyboardType={'number-pad'}
         maxLength={props.maxLength}
         defaultValue={}
        />  
        </View>
    );

  }