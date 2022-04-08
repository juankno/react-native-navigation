import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
// import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */}
        <DrawerNavigator/>
    </NavigationContainer>
  );
};
