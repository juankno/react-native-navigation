import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const PageOneScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 1 Screen</Text>

      <Button
        title="Ir a la página 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />

      <Button
        title="Ir Persona"
        onPress={() => navigation.navigate('PersonScreen')}
      />

    </View>
  );
};
