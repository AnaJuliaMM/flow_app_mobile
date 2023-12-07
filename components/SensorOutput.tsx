// SensorOutput.tsx

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface SensorOutputProps {
  value: number;
  status: {
    text: string;
    color: string;
  };
  data: string;
}

export default function SensorOutput({ value, status, data }: SensorOutputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Última telemetria:</Text>
      <Text style={[styles.value, { color: status.color }]}>{value}Lts</Text>
      <Text style={styles.data}>{data}</Text>
      <View style={[styles.check, { backgroundColor: status.color }]}>
        <Text style={styles.iconText}>{status.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 35,
    color: '#700bba'
  },
  value: {
    textAlign: 'center',
    margin: 5,
    fontSize: 115,
  },
  data: {
    textAlign: 'center',
    margin: 5,
    fontSize: 18,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 10,
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  iconText: {
    color: 'white',
    fontSize: 20,
  },
});
