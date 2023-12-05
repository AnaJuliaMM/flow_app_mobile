import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ["Litros Totais"],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://xquad3.pythonanywhere.com/sensor/"
        );
        const result = await response.json();

        // Assuming result is an array of data objects
        const labels = result.map((data: any) => data.tempo_operacao);
        const litrosTotais = result.map((data: any) => data.litros_totais);

        setChartData({
          labels,
          datasets: [
            {
              data: litrosTotais,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
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

    fetchData();
  }, []);

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
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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



// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import {
//   LineChart,
// } from "react-native-chart-kit";

// export default function Dashboard() {
//   const data = {
//     labels: ["January", "February", "March", "April", "May", "June"],
//     datasets: [
//       {
//         data: [20, 45, 28, 80, 99, 43],
//         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
//         strokeWidth: 2,
//       },
//     ],
//     legend: ["Rainy Days"],
//   };

//   const chartConfig = {
//     backgroundGradientFrom: "#ffffff",
//     backgroundGradientTo: "#ffffff",
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     strokeWidth: 2, // optional, default 3
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Dashboard</Text>
//       <LineChart
//         data={data}
//         width={380}
//         height={220}
//         chartConfig={chartConfig}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignSelf:'center',
//     paddingTop: 40,
//   }
// });
