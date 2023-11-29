import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface InputValuesProp{
    text: string,
    imagePath: string
}

export default function InputValues({text, imagePath}: InputValuesProp) {
  return (
    <View >
        <Image source={{uri: imagePath}}/>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <input style={styles.input} type="number" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '100%'
    },
    text: {
        color: '#fff'
    },
    input: {
        border: 'none', 
        width: 100

    }
})