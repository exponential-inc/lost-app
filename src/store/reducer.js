import React from 'react';
import {Text} from 'react-native';
import { Appearance } from 'react-native-appearance';

const initialState = {
  orientation: 'portrait', //portrait/landscape
  theme: 'light', //dark/light
  themeMode: 'auto', //need to save in device
  themeNative: Appearance.getColorScheme(), // device's native theme
  settingsModalIsOpen: false,
  settingsModalContent: ['Blank', (<Text></Text>)]
}

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: (state.theme === 'dark') ? 'light' : 'dark',
      }
    case 'TOGGLE_SETTINGS_MODAL':
      return {
        ...state,
        settingsModalIsOpen: action.setTo ? true : false,
        settingsModalContent: action.content
      }
    case 'SET_THEME_MODE':
      return {
        ...state,
        themeMode: action.setTo,
        theme: (action.setTo === 'dark') ? 'dark' : ((action.setTo === 'light') ? 'light' : (action.setTo === 'auto' ? state.themeNative : state.theme)),
      }
    case 'SET_THEME_NATIVE':
      return {
        ...state,
        themeNative: action.theme,
        theme: state.themeMode === 'auto' ? action.theme : state.theme
      }
    default:
      return {
        ...state
      }
  }
}