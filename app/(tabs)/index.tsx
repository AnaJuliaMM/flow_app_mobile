import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputValues from '../../components/InputValues';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <InputValues text='AAAAAA' imagePath='https://www.svgrepo.com/show/592/money.svg'></InputValues>
      <InputValues text='AAAAAA' imagePath='https://www.svgrepo.com/show/592/money.svg'></InputValues>

  
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
