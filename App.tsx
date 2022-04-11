import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNavigate } from './src/navigator/DrawerNavigate';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { BottomTabsNavigator } from './src/navigator/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */}
        {/* <DrawerNavigator/> */}
        <DrawerNavigate />
        {/* <BottomTabsNavigator/> */}

    </NavigationContainer>
  );
};
