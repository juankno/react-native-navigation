import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { authState: { isLoggedIn }, logout } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>


      {
        isLoggedIn && (
          <Button
            title="Logout"
            onPress={logout}
            color={colors.primary}
          />

        )
      }

    </View>
  );
};
