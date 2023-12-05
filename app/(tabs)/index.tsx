<<<<<<< HEAD
import React from "react";
import { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> dc75da0644020b4e8bc12498c462d83e51b619cf
import { StyleSheet, View, Alert, Button, Text } from "react-native";
import InputValues from "../../components/InputValues";
import ApiService from "../../api/apiServices";


interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

<<<<<<< HEAD
async function handleSubmit(data: Body, navigation:any) {
  try {
    await ApiService.post(data);
    Alert.alert("Success", "Data sent successfully");
    navigation.navigate('output'); 
  } catch (error) {
    Alert.alert("Error", "Failed to send data");
    console.error("Error:", error);
  }
}
=======

>>>>>>> dc75da0644020b4e8bc12498c462d83e51b619cf

export default function TabOneScreen() {
  const [pumpData, setPumpData] = useState({
    litros_totais: 0.0,
    preco_por_litro: 0.0,
  });


   
  async function handleSubmitData(data: Body) {
    try {
      await ApiService.post(data);
      Alert.alert("Success", "Data sent successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to send data");
      console.error("Error:", error);
    }
  }



  

 



  return (
    <View style={styles.container}>
      <InputValues
        text="Valor Pago:"
        imagePath="../../assets/images/vector_money.png"
        style={{ width: 21, height: 38 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, preco_por_litro: value })
        }
      />
      <InputValues
        text="Quantidade na bomba:"
        imagePath="../../assets/images/vector_money.png"
        style={{ width: 21, height: 38 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, preco_por_litro: value })
        }
      />  

<<<<<<< HEAD
      <View style={{ width: 100, height:50}}>
        <Button 
          title="Enviar"
          onPress={() => handleSubmit(pumpData, navigation)}
          color="#646464"
          accessibilityLabel="Clique para enviar os dados"
        />
      </View>
=======
      <Button
        title="Enviar"
        onPress={() => handleSubmitData(pumpData)}
      />

   


>>>>>>> dc75da0644020b4e8bc12498c462d83e51b619cf
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40
  },
});
