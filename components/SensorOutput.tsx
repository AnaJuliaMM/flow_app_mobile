import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface SensorOutputProps {
  value: number;
  status: {
    text: string,
    color: string
  }

}

export default function SensorOutput({ value, status }: SensorOutputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O sensor captou:</Text>
      <Text style={[styles.value, {color: status.color}]}>{value}Lts</Text>
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
    fontSize: 18,
  },
  value: {
    textAlign: 'center',
    margin: 5,
    fontSize: 115,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    padding: 10, // Ajuste para um padding fixo
    justifyContent: 'space-around',
    borderRadius: 5, // Borda arredondada
  },
  iconText: {
    color: 'white', // Cor do texto do ícone
    fontSize: 20, // Tamanho do texto do ícone
  },
});
