import { StyleSheet, Text, View, TextInput, ImageStyle  } from 'react-native'
import React from 'react'
import CustomImage from './Image'

interface InputValuesProp{
    text: string,
    imagePath: string,
    style?: ImageStyle,
    onChange: (value:number) => void
}

export default function InputValues({text, imagePath, style, onChange}: InputValuesProp) {
  

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.container}>
        <CustomImage imagePath={imagePath} style={style}/>
        <TextInput  keyboardType='numeric' style={styles.input} onChange={()=> onChange}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      width: '100%'
  },
  text: {
      color: '#000',
      fontSize: 20,
      textAlign: 'center',
      width: '70%'
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
    backgroundColor: '#fff'
  },
  image: {
    width: 17,
    height: 30
  }
})