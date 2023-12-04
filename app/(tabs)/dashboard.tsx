import React from 'react';
import { StyleSheet, View } from 'react-native';
import SensorOutput from '../../components/SensorOutput';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <SensorOutput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
