import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";

interface SensorData {
  tempo_operacao: string;
  litros_totais: number;
  // Adicione outros campos conforme necessário
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

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Litros Totais"],
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://xquad3.pythonanywhere.com/sensor/");
      const result: SensorData[] = await response.json();

      const labels = result.map((data) => data.tempo_operacao);
      const litrosTotais = result.map((data) => data.litros_totais);

      setChartData({
        labels,
        datasets: [
          {
            data: litrosTotais,
            color: (opacity) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2,
          },
        ],
        legend: ["Litros Totais"],
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
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
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    paddingTop: 40,
  },
});

export default Dashboard;
