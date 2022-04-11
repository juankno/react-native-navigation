import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },

                tabBarIcon: ({ color, focused, size }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabOneScreen':
                            iconName = 'T1';
                            break;
                        case 'TabTwoScreen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'St';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>;
                },
            })}
        >
            <Tab.Screen
                name="TabOneScreen"
                options={{
                    title: 'Tab One',
                    tabBarLabel: 'Tab One',
                }}
                component={TabOneScreen}
            />
            <Tab.Screen
                name="TabTwoScreen"
                options={{
                    title: 'Tab Two',
                    tabBarLabel: 'Tab Two',
                }}
                component={TabTwoScreen}
            />
            <Tab.Screen
                name="StackNavigator"
                options={{
                    title: 'Stack',
                    tabBarLabel: 'Stack',
                }}
                component={StackNavigator}
            />
        </Tab.Navigator>
    );
};
