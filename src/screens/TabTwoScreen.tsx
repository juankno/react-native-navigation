import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const TabTwoScreen = () => {

    useEffect(() => {
        console.log('Use effect TabTwoScreen');
    }, []);

    return (
        <View>
            <Text>TabTwoScreen</Text>
        </View>
    );
};
