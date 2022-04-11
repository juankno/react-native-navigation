import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { TabThreeScreen } from '../screens/TabThreeScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TabOneScreen" component={TabOneScreen} />
            <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
            <Tab.Screen name="TabThreeScreen" component={TabThreeScreen} />
        </Tab.Navigator>
    );
};
