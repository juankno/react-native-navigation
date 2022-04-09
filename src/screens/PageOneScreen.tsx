import React, { useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

export const PageOneScreen = ({ navigation }: Props) => {

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menú"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });


  }, []);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Página 1 Screen</Text>

      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('PageTwoScreen')}
      >
        <Text style={styles.bigButtonText}>Ir a la página 2</Text>
      </TouchableOpacity>

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
      }}> Navegar con argumentos
      </Text>

      <View style={{
        flexDirection: 'row',
      }}>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 1,
            name: 'Pedro Corhal',
          })}
        >
          <Text style={styles.bigButtonText}>Pedro Corhal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'María Acevedo',
          })}
        >
          <Text style={styles.bigButtonText}>María Acevedo</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
};
