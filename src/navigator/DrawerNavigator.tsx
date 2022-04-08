import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Dimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get('window');


export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
