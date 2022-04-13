import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { }

export const PageOneScreen = ({ navigation }: Props) => {

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.globalMargin}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={styles.textButton}>
            <Icon name="menu-outline" size={20} color="#000" />
          </Text>
        </TouchableOpacity>
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
        <Text style={styles.textButton}>
          <Icon name="arrow-forward-circle-outline" size={20} color="#fff" />
        </Text>
        <Text style={styles.bigButtonText}>Ir a la página 2</Text>
      </TouchableOpacity>

      {/* Navegar con argumentos */}

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
          <Text style={styles.textButton}>
            <Icon name="person-outline" size={20} color="#fff" />
          </Text>
          <Text style={styles.bigButtonText}>Pedro Corhal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PersonScreen', {
            id: 2,
            name: 'María Acevedo',
          })}
        >
          <Text style={styles.textButton}>
            <Icon name="person-outline" size={20} color="#fff" />
          </Text>
          <Text style={styles.bigButtonText}>María Acevedo</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
};
