import { StyleSheet, Text, View, TextInput, ImageStyle, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import CustomImage from './Image'

interface InputValuesProp {
  text: string,
  imagePath: string,
  style?: ImageStyle,
  onChange: (value: number) => void
}

const handleDismissKeyboard = () => {
  Keyboard.dismiss();
};

export default function InputValues({ text, imagePath, style, onChange }: InputValuesProp) {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleInputChange = (text: string) => {
    // Você pode adicionar validação aqui para garantir que seja um número válido
    const numericValue = parseFloat(text);
    
    setInputValue(text);
    onChange(numericValue);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.container}>
        <CustomImage imagePath={imagePath} style={style} />

        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <View style={styles.inputContainer}>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              returnKeyType='done'
              value={inputValue}
              onChangeText={handleInputChange}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    textAlign: "center",
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    margin: 0,
    paddingBottom: 0,
    paddingTop: 0
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, 
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 10,
  },
  input: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 180,
    height: 100,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: '700',
    backgroundColor: '#fff',
  },
});
