import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SensorOutput from '../../components/SensorOutput';

const API_ENDPOINT = 'http://xquad3.pythonanywhere.com/sensor';

export default function TabTwoScreen() {
  const [litrosTotais, setLitrosTotais] = useState(0);
  const [abastecimentoEmAndamento, setAbastecimentoEmAndamento] = useState(false);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<Date | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const ultimoDado = data[data.length - 1].litros_totais;

        if (ultimoDado !== litrosTotais) {
          setLitrosTotais(ultimoDado);
          setAbastecimentoEmAndamento(true);
          setUltimaAtualizacao(new Date());
        }
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      setLitrosTotais(0);
      setAbastecimentoEmAndamento(false);
      setUltimaAtualizacao(null);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(fetchData, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const verificaFimAbastecimento = () => {
      if (abastecimentoEmAndamento && ultimaAtualizacao) {
        const diferencaTempo = new Date().getTime() - ultimaAtualizacao.getTime();

        if (diferencaTempo > 5000 && litrosTotais > 0) {
          setAbastecimentoEmAndamento(false);
          console.log('Abastecimento concluído! Último valor:', litrosTotais);
        }
      }
    };

    const intervalFimAbastecimento = setInterval(verificaFimAbastecimento, 1000);

    return () => clearInterval(intervalFimAbastecimento);
  }, [abastecimentoEmAndamento, ultimaAtualizacao, litrosTotais]);

  let textoExibicao = 'Aguardando abastecimento';

  if (abastecimentoEmAndamento) {
    textoExibicao = 'Abastecimento em andamento';
  } else if (ultimaAtualizacao) {
    textoExibicao = 'Abastecimento concluído!';
  }

  const iconText = 'Abastecimento aceitável';
  const iconColor = 'green';

  return (
    <View style={styles.container}>
      <SensorOutput value={litrosTotais} iconText={iconText} iconColor={iconColor} />
      <Text>{textoExibicao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import SensorOutput from '../../components/SensorOutput';
// import InputValues from '../../components/InputValues';

// export default function TabTwoScreen() {
//   return (
//     <View style={styles.container}>
//       <SensorOutput value={10} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
