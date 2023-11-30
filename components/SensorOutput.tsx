import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

interface SensorOutputProps{
    value: number;
}

export default function SensorOutput({value}: SensorOutputProps) {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>O sensor captou:</Text>
      <h1 style={styles.value}>{value}20L</h1>
      <Text style={styles.text}> A quantidade abastecida é suficiente! <image> </image></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        fontSize:10,
        justifyContent:"center",
        alignItems:"center",
          },
    text:{
      textAlign:"center",
      margin:10
    },
    value:{
      textAlign:"center",
      margin:5,
      fontSize:80

    }
  });