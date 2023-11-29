import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface SensorOutputProps{
    value: number;
}

export default function SensorOutput({value}: SensorOutputProps) {
  return (
    <View>
      <Text styles={styles.container}>O sensor captou:</Text>
      <h1>{value}</h1>
      <Text> A quantidade abastecida é suficiente </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        fontSize:10
    }
})