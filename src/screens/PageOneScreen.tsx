import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const PageOneScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 1 Screen</Text>

      <Button
        title="Ir a la página 2"
        onPress={() => navigation.navigate('PageTwoScreen')}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PersonScreen', {
          id: 1,
          name: 'Pedro Corhal',
        })}
      >
        <Text style={styles.textButton}>Pedro Corhal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PersonScreen', {
          id: 2,
          name: 'María Acevedo',
        })}
      >
        <Text style={styles.textButton}>María Acevedo</Text>
      </TouchableOpacity>

    </View>
  );
};
