import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen name="BottomTabsNavigator" component={BottomTabsNavigator} />
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
         
          onPress={() => navigation.navigate('BottomTabsNavigator')}
        >
          <View  style={styles.menuButton}>
            <Text>
              <Icon
                name="home-outline"
                size={20} color="#000"
              />
            </Text>
            <Text style={styles.menuText}>
              Bottom Tabs Screen
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <View  style={styles.menuButton}>
            <Text>
              <Icon
                name="settings-outline"
                size={20} color="#000"
              />
            </Text>
            <Text style={styles.menuText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
};
