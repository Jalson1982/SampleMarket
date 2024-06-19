/**
 * @format
 */
import React from 'react';
import 'intl-pluralrules';
import './src/translations/index';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const WrappedApp = () => {
  return <App />;
};
AppRegistry.registerComponent(appName, () => WrappedApp);
