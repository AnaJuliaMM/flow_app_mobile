import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import SensorOutput from "../../components/SensorOutput";
import { format } from 'date-fns';
import { usePumpContext } from "../../contexts/pumpContext";
import { Logs } from "expo";

interface SensorData {
  id: number;
  tempo_operacao: string;
  litros_totais: number;
  litros_por_minuto: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity: number) => string;
    strokeWidth: number;
  }[];
  legend: string[];
}

const API_ENDPOINT = 'http://xquad3.pythonanywhere.com/sensor';

export default function Dashboard() {
  const [litrosTotaisSensor, setLitrosTotaisSensor] = useState(0);
  const [abastecimentoEmAndamento, setAbastecimentoEmAndamento] = useState(false);
  const [ultimaAtualizacao, setUltimaAtualizacao] = useState<Date | undefined>(undefined);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Vazão por Minuto"],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [maxDataPoints, setMaxDataPoints] = useState<number>(5);
  const [timeInterval, setTimeInterval] = useState<number>(1);
  const [lastRecordTimestamp, setLastRecordTimestamp] = useState<string | null>(null);
  const [lastProcessedRecord, setLastProcessedRecord] = useState<SensorData | null>(null);
  const {pumpData} = usePumpContext()

  // Função de requisição de dados para o dashboard
  const fetchData = async () => {
    try {
      const queryParams = lastRecordTimestamp ? `?lastRecordTimestamp=${lastRecordTimestamp}` : '';
      const response = await fetch(`${API_ENDPOINT}${queryParams}`);
      const result: SensorData[] = await response.json();

      if (result.length > 0) {
        const latestRecord = result[result.length - 1];
        if (!lastProcessedRecord || latestRecord.tempo_operacao !== lastProcessedRecord.tempo_operacao) {
          setLastRecordTimestamp(latestRecord.tempo_operacao);
          setLastProcessedRecord(latestRecord);

          const formattedData = result.map((data) => ({
            seconds: new Date(data.tempo_operacao).getTime(),
            vazao: data.litros_por_minuto,
          }));

          const reducedData = formattedData.slice(-maxDataPoints);
          const labels = reducedData.map((entry) => format(entry.seconds, 'HH:mm:ss'));
          const vazaoPorMinuto = reducedData.map((entry) => entry.vazao);

          setChartData({
            labels,
            datasets: [
              {
                data: vazaoPorMinuto,
                color: (opacity) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
              },
            ],
            legend: ["Vazão por Minuto"],
          });

          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // Função de requisição de dados para a saída
  const fetchDataOutput = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        const ultimoDado = data[data.length - 1].litros_totais;

        if (ultimoDado !== litrosTotaisSensor) {
          setLitrosTotaisSensor(ultimoDado);
          setAbastecimentoEmAndamento(true);
          setUltimaAtualizacao(new Date());
        }
      }
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      setLitrosTotaisSensor(0);
      setAbastecimentoEmAndamento(false);
      setUltimaAtualizacao(undefined);
    }
  };

  //Lógica de verificar a diferença
  const verifyLTS = () => {
    // Faz os litros totais menos o que foi enviado pelo usuário
    const difference = litrosTotaisSensor - pumpData.litros_totais
    const tolerance = pumpData.litros_totais*0.005 // 0,5%

   if(difference < tolerance){
    console.log(`Diferença MENOR. Diferença ${difference}, tolerança: ${tolerance}`);
    return {
      text: 'ALERTA!',
      color: 'red'
    }
   }
    console.log(`Diferença OK. Diferença ${difference}, tolerança: ${tolerance}`);
    return {
      text: 'Abastecimento aceitável',
      color: 'green'
    }
  
  }

  useEffect(() => {
    // Busca dos dados
    fetchData();
    const intervalDashboard = setInterval(fetchData, timeInterval * 1000);

    fetchDataOutput();
    verifyLTS()
    const intervalOutput = setInterval(fetchDataOutput, 500);

    return () => {
      clearInterval(intervalDashboard);
      clearInterval(intervalOutput);
    };
  }, [timeInterval, litrosTotaisSensor, lastRecordTimestamp, lastProcessedRecord]);

   return (
    <View style={styles.container}>
      <SensorOutput value={litrosTotaisSensor} status={verifyLTS()} />

      <View style={styles.chartContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <LineChart
            data={chartData}
            width={370}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              color: (opacity) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2,
            }}
            bezier
            xLabelsOffset={-10}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
  },
  chartContainer: {
    marginTop: 40,
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
  },
});
