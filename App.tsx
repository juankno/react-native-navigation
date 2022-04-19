import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNavigate } from './src/navigator/DrawerNavigate';
import { AuthProvider } from './src/context/AuthContext';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { BottomTabsNavigator } from './src/navigator/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <DrawerNavigator/> */}
        <DrawerNavigate />
        {/* <BottomTabsNavigator/> */}
      </AppState>

    </NavigationContainer>
  );
};

export const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};
