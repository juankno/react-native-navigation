import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PageOneScreen" component={PageOneScreen} />
            <Stack.Screen name="PageTwoScreen" component={PageTwoScreen} />
            <Stack.Screen name="PageThreeScreen" component={PageThreeScreen} />
        </Stack.Navigator>
    );
};
