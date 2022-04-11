import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const TabThreeScreen = () => {

    useEffect(() => {
        console.log('Use effect TabThreeScreen');
    }, []);

    return (
        <View>
            <Text>Tab three Screen</Text>
        </View>
    );
};
