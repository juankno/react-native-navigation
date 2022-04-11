import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';


export const BottomTabsNavigator = () => {

    return Platform.OS === 'ios'
        ? <TabsIos />
        : <TabsAndroid />;
};


const BottomTapAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTapAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary,
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

                tabBarIcon: ({ color, focused }) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabOneScreen':
                            iconName = 'T1';
                            break;
                        case 'TopTabsNavigator':
                            iconName = 'Tt';
                            break;
                        case 'StackNavigator':
                            iconName = 'St';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>;
                },
            })}
        >
            <BottomTapAndroid.Screen
                name="TabOneScreen" options={{
                    title: 'Tab One',
                }}
                component={TabOneScreen}
            />
            <BottomTapAndroid.Screen
                name="TopTabsNavigator" options={{
                    title: 'Top Tabs',
                }}
                component={TopTabsNavigator}
            />
            <BottomTapAndroid.Screen
                name="StackNavigator" options={{
                    title: 'Stack',
                }}
                component={StackNavigator}
            />
        </BottomTapAndroid.Navigator>
    );
};


const BottomTapIos = createBottomTabNavigator();

const TabsIos = () => {
    return (
        <BottomTapIos.Navigator
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
                        case 'TopTabsNavigator':
                            iconName = 'Tt';
                            break;
                        case 'StackNavigator':
                            iconName = 'St';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>;
                },
            })}
        >
            <BottomTapIos.Screen
                name="TabOneScreen" options={{
                    title: 'Tab One',
                }}
                component={TabOneScreen}
            />
            <BottomTapIos.Screen
                name="TopTabsNavigator" options={{
                    title: 'Top Tabs',
                }}
                component={TopTabsNavigator}
            />
            <BottomTapIos.Screen
                name="StackNavigator" options={{
                    title: 'Stack',
                }}
                component={StackNavigator}
            />
        </BottomTapIos.Navigator>
    );
};