import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const TabOneScreen = () => {

    useEffect(() => {
        console.log('Use effect TabOneScreen');
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon name="airplane-outline" />
                <TouchableIcon name="chatbox-outline" />
                <TouchableIcon name="american-football-outline" />
                <TouchableIcon name="bandage-outline" />
                <TouchableIcon name="cash-outline" />
                <TouchableIcon name="disc-outline" />
                <TouchableIcon name="cart-outline" />
                <TouchableIcon name="desktop-outline" />
            </Text>
        </View>
    );
};
