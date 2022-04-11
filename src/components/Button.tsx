import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string;
    onPress: () => void;
    iconName?: string;
    textColor?: string;
    fontColor?: string;
}

export const Button = ({ title, onPress, iconName = '', textColor = '#FFFFFF', fontColor = '#20232A' }: Props) => {
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
            }}>
                <Icon
                    name={iconName}
                    size={20} color="#ffff"
                />
                {title}
            </Text>
        </TouchableOpacity>
    );
};

