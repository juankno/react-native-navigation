import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigate = () => {

  const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};


const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://avatarairlines.com/wp-content/uploads/2020/05/Male-placeholder.jpeg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuText}>Stack Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
};
