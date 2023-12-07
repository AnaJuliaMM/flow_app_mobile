import React, { useState } from "react";
import { StyleSheet, View, Alert, Button, Text } from "react-native";
import InputValues from "../../components/InputValues";
import { usePumpContext, PumpProvider } from './../../contexts/pumpContext';

interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

export default function TabOneScreen() {
  const { pumpData, setPumpData } = usePumpContext();
  const [resultadoProduto, setResultadoProduto] = useState<number | null>(null);

  const handleSubmit = async (data: Body) => {
    try {
      // Converte os valores para números
      const precoPorLitro = parseFloat(data.preco_por_litro.toString());
      const litrosTotais = parseFloat(data.litros_totais.toString());

      if( precoPorLitro && litrosTotais){
        // Calcular o produto e atualizar o estado
        const produto = precoPorLitro * litrosTotais;
        console.log("produto:", produto);
        setResultadoProduto(produto);

      }else{
        Alert.alert("Atenção", "Algum campo está vazio!");

      }

      

    } catch (error) {
      Alert.alert("Erro", "Falha na computação dos valores");
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <InputValues
        text="Valor pago por litro:"
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
          setPumpData({ ...pumpData, litros_totais: value })
        }
      />

      <View style={{ width: 100, height: 50 }}>
        <Button 
          title="Enviar"
          onPress={() => handleSubmit(pumpData)}
          color="#646464"
          accessibilityLabel="Clique para enviar os dados"
        />
      </View>

      {resultadoProduto !== null && (
        <Text style={styles.resultText}>
          Total: R${resultadoProduto.toFixed(2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    marginTop: 20,
    fontSize: 25,
    marginBottom:30,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'grey',
    padding:10,
    borderRadius:15
  },
});
