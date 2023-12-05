import React from "react";
import { useState } from "react";
import { StyleSheet, View, Alert, Button } from "react-native";
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
    navigation.navigate('output'); // Navigate to the "output" screen
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
        text="Quantidade de gasolina que você pagou:"
        imagePath="../../assets/images/vector_money.png"
        style={{ width: 21, height: 38 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, preco_por_litro: value })
        }
      />
      <InputValues
        text="Quantidade de gasolina que apareceu na bomba:"
        imagePath="../../assets/images/vector_oil.png"
        style={{ width: 27, height: 30 }}
        onChange={(value: number) =>
          setPumpData({ ...pumpData, litros_totais: value })
        }
      />

      <Button
        title="Enviar"
        onPress={() => handleSubmit(pumpData, navigation)}
      />
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

