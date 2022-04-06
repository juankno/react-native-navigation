import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>App Screen</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
