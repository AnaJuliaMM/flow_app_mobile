import React from "react";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TabLayout() {
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarStyle: {
          backgroundColor: '#212122', // Background da barra inferior
        },
        headerStyle: {
          backgroundColor: '#212122', // Background do cabeçalho
        },
        headerTintColor: 'white', // Cor do texto do cabeçalho
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Sensor",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="wifi-tethering" size={24} color={color} />
          ),
          headerTitle: "Sensor Flow",
          headerTitleAlign: 'center',
          headerTitleContainerStyle: {
            flex: 1,
            justifyContent: 'center',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Tabs.Screen
<<<<<<< HEAD
        name="output"
        options={{
          title: "Resultado",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" size={24} color={color} />
          ),
          headerTitle: "Sensor Flow",
          headerTitleAlign: 'center',
          headerTitleContainerStyle: {
            flex: 1,
            justifyContent: 'center',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />

      <Tabs.Screen
=======
>>>>>>> dc75da0644020b4e8bc12498c462d83e51b619cf
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="assessment" size={24} color={color} /> // Altere o ícone aqui
          ),
          headerTitle: "Sensor Flow",
          headerTitleAlign: 'center',
          headerTitleContainerStyle: {
            flex: 1,
            justifyContent: 'center',
          },
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Tabs>
  );
}

