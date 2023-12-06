import React from "react";
import { StyleSheet, View, Alert, Button } from "react-native";
import InputValues from "../../components/InputValues";
import ApiService from "../../api/apiServices";

interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

async function handleSubmit(data: Body, router: any) {
  try {
    await ApiService.post(data);
    Alert.alert("Success", "Data sent successfully");
    router.navigate('output'); 
  } catch (error) {
    Alert.alert("Error", "Failed to send data");
    console.error("Error:", error);
  }
}

export default function TabOneScreen({ navigation }: any) {
  const [pumpData, setPumpData] = React.useState({
    litros_totais: 0.0,
    preco_por_litro: 0.0,
  });

  const handleSubmitData = async (data: Body) => {
    try {
      await ApiService.post(data);
      Alert.alert("Success", "Data sent successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to send data");
      console.error("Error:", error);
    }
  };

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

      <View style={{ width: 100, height: 50 }}>
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
