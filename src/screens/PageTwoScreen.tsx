import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const PageTwoScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text>Page 2 Screen</Text>

      <Button
        title="Ir a la página 3"
        onPress={() => navigation.navigate('PageThreeScreen')} />
    </View>
  );
};
