import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface SensorOutputProps{
    value: number;
}

export default function SensorOutput({value}: SensorOutputProps) {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>O sensor captou:</Text>
      <h1 style={styles.value}>{value}20L</h1>
        <View style={styles.check}>
          <Text style={styles.text}> A quantidade abastecida é suficiente!</Text>
          <MaterialIcons name="check" size={34} color="green" />
        </View>
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
      fontSize:80,
    },
    check:{
      display:"flex",
      flexDirection:"row", 
      margin:0,
      padding:0,
      justifyContent:"space-around"
    }
  });