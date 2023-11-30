import React from 'react';
import {Pressable} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs,  } from 'expo-router';
import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons'; 

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sensor',
          tabBarIcon: ({ color }) =><MaterialIcons name="wifi-tethering" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon:({ color }) => <MaterialIcons name="dashboard" size={24} color="black" />,
          headerTitle: 'Verifica Combustível',
        }}
      />
    </Tabs>
  );
}
