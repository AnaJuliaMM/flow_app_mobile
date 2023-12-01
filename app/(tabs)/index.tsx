import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputValues from '../../components/InputValues';
import SensorOutput from '../../components/SensorOutput';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <InputValues text='Quantidade de gasolina que você pagou:' imagePath='../assets/images/vector_money.png' style={{width: 21, height: 38}}></InputValues>
      <InputValues text='Quantidade de gasolina que apareceu na bomba:' imagePath='../assets/images/vector_oil.png' style={{width: 27, height: 30}}></InputValues>
  
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
