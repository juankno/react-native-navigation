import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const PageThreeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 3 Screen</Text>

      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />

      <Button
        title="Ir a la primera página"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
