/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStack from './src/navigation/RootStack';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

export default App;
