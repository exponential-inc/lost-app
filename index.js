/**
 * @format
 */

import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './src/store/reducer';

export const store = createStore(reducer);
console.disableYellowBox = true; //to remove annoying warning popups.
const RenderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => RenderApp);
