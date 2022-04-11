import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export const TabOneScreen = () => {

    useEffect(() => {
        console.log('Use effect TabOneScreen');
    }, []);

    return (
        <View>
            <Text>TabOneScreen</Text>
        </View>
    );
};
