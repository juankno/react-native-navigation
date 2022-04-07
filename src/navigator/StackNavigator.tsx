import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PageOneScreen } from '../screens/PageOneScreen';
import { PageTwoScreen } from '../screens/PageTwoScreen';
import { PageThreeScreen } from '../screens/PageThreeScreen';
import { PersonScreen } from '../screens/PersonScreen';


export type RootStackParams = {
    PageOneScreen: undefined,
    PageTwoScreen: undefined,
    PageThreeScreen: undefined,
    PersonScreen: { id: number, name: string, },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <Stack.Screen name="PageOneScreen" options={{ title: 'Página 1' }} component={PageOneScreen} />
            <Stack.Screen name="PageTwoScreen" options={{ title: 'Página 2' }} component={PageTwoScreen} />
            <Stack.Screen name="PageThreeScreen" options={{ title: 'Página 3' }} component={PageThreeScreen} />
            <Stack.Screen name="PersonScreen" options={{ title: 'Persona' }} component={PersonScreen} />
        </Stack.Navigator>
    );
};
