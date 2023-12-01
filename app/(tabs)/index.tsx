import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Alert, Button } from "react-native";
import InputValues from "../../components/InputValues";
import SensorOutput from "../../components/SensorOutput";

interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

export default function TabOneScreen() {
  // JSON data to send in the API
  const [pumpData, setPumpData] = useState({
    litros_totais: 10.0,
    preco_por_litro: 5.0,
  });

  //Function to API response
  async function handleSubmit(data: Body) {
    try {
      const response = await postData(data);
      if (response.ok) {
        //Catch the response json body
        const responseData = await response.json();
        // Print the response
        console.log(responseData);
        // Generate an alert
        Alert.alert("Success", "Data sent successfully");
      } else {
        // Generate an alert with the error
        Alert.alert("Error", "Failed to send data");
      }
    } catch (error) {
      // Handle network errors or other issues
      console.error("Error:", error);
    }
  }

  //Funtion to submit the data
  async function postData(data: Body) {
    // Request
    return fetch("http://xquad3.pythonanywhere.com/pump/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "no-cors",
        // Add any additional headers here
      },
      body: JSON.stringify(data),
    });
  }

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

      <Button title="Send Data" onPress={() => handleSubmit(pumpData)} />
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
});
