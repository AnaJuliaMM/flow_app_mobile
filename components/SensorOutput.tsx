import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

interface SensorOutputProps{
    value: number;
}

export default function SensorOutput({value}: SensorOutputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O sensor captou:</Text>
      <Text style={styles.value}>{value}20L</Text>
        <View style={styles.check}>
          <Text style={styles.text}> A quantidade abastecida é suficiente!</Text>
          <MaterialIcons name="check" size={34} color="green" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
          },
    text:{
      textAlign:"center",
      margin:10,
      fontSize:18
    },
    value:{
      textAlign:"center",
      margin:5,
      fontSize:115,
      color:"green"
    },
    check:{
      display:"flex",
      flexDirection:"row", 
      margin:0,
      padding:0,
      justifyContent:"space-around"
    }
  });