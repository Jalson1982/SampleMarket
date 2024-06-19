/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Router} from '@navigation';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <FlashMessage position="top" />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
