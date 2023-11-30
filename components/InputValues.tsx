import { StyleSheet, Text, View, TextInput  } from 'react-native'
import React from 'react'
import CustomImage from './Image'

interface InputValuesProp{
    text: string,
    imagePath: string
}

export default function InputValues({text, imagePath}: InputValuesProp) {
  

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.container}>
        <CustomImage imagePath='../assets/images/vector_oil.png' style={{width: 27, height: 30}}/>
        <TextInput  keyboardType='numeric' style={styles.input}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      width: '100%'
  },
  text: {
      color: '#000',
      fontSize: 30
  },
  input: {
    textAlign: 'center',
    textAlignVertical: 'center',
    border: 'none',
    width: 100,
    height: 70,
    borderRadius: 0.5,
    fontSize: 30,
    fontWeight: '700',
  },
  image: {
    width: 17,
    height: 30
  }
})