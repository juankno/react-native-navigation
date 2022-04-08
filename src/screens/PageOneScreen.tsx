import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

export const PageOneScreen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="Menú"
        onPress={() => navigation.toggleDrawer()}
      />,
    });
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 1 Screen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PageTwoScreen')}
      >
        <Text style={styles.textButton}>Ir a la página 2</Text>
      </TouchableOpacity>

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
