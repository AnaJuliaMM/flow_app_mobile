import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

interface InputValuesProp{
    text: string,
    imagePath: string
}
export default function InputValues({text, imagePath}: InputValuesProp) {
  return (
    <View>
      <Text>InputValues</Text>
      <View>
        <Image source={{uri: imagePath}}/>
        <input type="number" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})