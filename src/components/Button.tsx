import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#20232A',
        borderRadius: 20,
        padding: 10,
        width: 200,
        margin: 10,
    },
    textButton: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});
