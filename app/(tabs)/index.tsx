import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Alert, Button, useColorScheme } from "react-native";
import InputValues from "../../components/InputValues";
import ApiService from "../../api/apiServices";


interface Body {
  litros_totais: number;
  preco_por_litro: number;
}



  //Function to API response
  async function handleSubmit(data: Body) {
    try {
      await ApiService.post(data);
      // Generate an alert
      Alert.alert("Success", "Data sent successfully");
    
    }catch (error) {
      // Generate an alert with the error
      Alert.alert("Error", "Failed to send data");
      // Handle network errors or other issues
      console.error("Error:", error);
    }
  }


  export default function TabOneScreen() {
    // JSON data to send in the API
    const [pumpData, setPumpData] = useState({
      litros_totais: 0.0,
      preco_por_litro: 0.0
    });

  return (
    <View style={styles.container}>
      <InputValues
        text="Quantidade de gasolina que você pagou:"
        imagePath="../assets/images/vector_money.png"
        style={{ width: 21, height: 38 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, preco_por_litro: value })
        }
      />
      <InputValues
        text="Quantidade de gasolina que apareceu na bomba:"
        imagePath="../assets/images/vector_oil.png"
        style={{ width: 27, height: 30 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, litros_totais: value })
        }
      />

      <Button title="Enviar" onPress={() => handleSubmit(pumpData)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

})
