import React from "react";
import { useState } from "react";
import { StyleSheet, View, Alert, Button, Text } from "react-native";
import InputValues from "../../components/InputValues";
import ApiService from "../../api/apiServices";
import { useNavigation } from '@react-navigation/native';

interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

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

export default function TabOneScreen() {
  const navigation = useNavigation();
  const [pumpData, setPumpData] = useState({
    litros_totais: 0.0,
    preco_por_litro: 0.0,
  });

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

      <View style={{ width: 100, height:50}}>
        <Button 
          title="Enviar"
          onPress={() => handleSubmit(pumpData, navigation)}
          color="#646464"
          accessibilityLabel="Clique para enviar os dados"
        />
      </View>
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
