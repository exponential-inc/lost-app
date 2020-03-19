import React from 'react';
import {Text} from 'react-native';

const initialState = {
  orientation: 'portrait', //portrait/landscape
  theme: 'light', //dark/light
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
    default:
      return {
        ...state
      }
  }
}