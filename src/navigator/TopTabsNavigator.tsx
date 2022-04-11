import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarStyle: {
          paddingTop: top,
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },

        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;

            case 'ContactsScreen':
              iconName = 'Co';
              break;

            case 'AlbumsScreen':
              iconName = 'Al';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}

      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
