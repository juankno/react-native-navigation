import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen
                name="TabOneScreen"
                options={{
                    title: 'Tab One',
                    tabBarLabel: 'Tab One',
                    tabBarIcon: () => null,
                }}
                component={TabOneScreen}
            />
            <Tab.Screen
                name="TabTwoScreen"
                options={{
                    title: 'Tab Two',
                    tabBarLabel: 'Tab Two',
                    tabBarIcon: () => null,
                }}
                component={TabTwoScreen}
            />
            <Tab.Screen
                name="StackNavigator"
                options={{
                    title: 'Stack',
                    tabBarLabel: 'Stack',
                    tabBarIcon: () => null,
                }}
                component={StackNavigator}
            />
        </Tab.Navigator>
    );
};
