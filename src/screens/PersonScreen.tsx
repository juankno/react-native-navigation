import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

export const PersonScreen = ({ route, navigation }: Props) => {

    const { changeUsername } = useContext(AuthContext);

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, []);

    useEffect(() => {
        changeUsername(params.name);
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
        </View>
    );
};
