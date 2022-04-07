import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    onPress: () => void;
    textColor?: string;
    fontColor?: string;
}

export const Button = ({ title, onPress, textColor = '#FFFFFF', fontColor = '#20232A' }: Props) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                backgroundColor: fontColor,
            }}
            onPress={onPress}
        >
            <Text style={{
                ...styles.textButton,
                color: textColor,
            }}>{title}</Text>
        </TouchableOpacity>
    );
};

