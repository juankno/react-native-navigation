import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { TouchableIcon } from '../components/TouchableIcon';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);


  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20,
    }}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 2)}</Text>

      {
        authState.favoriteIcon && (
          <Text>
            <TouchableIcon name={authState.favoriteIcon} />
          </Text>
        )
      }

    </View>
  );
};
