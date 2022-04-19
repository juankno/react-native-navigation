import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts Screen</Text>

      {!authState.isLoggedIn &&
        <Button
          title="Sign in"
          onPress={signIn}
          color={colors.primary}
        />
      }

    </View>
  );
};
