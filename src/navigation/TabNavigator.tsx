import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { TasksScreen } from "../screens/TasksScreen";
import { CategoriesScreen } from "../screens/CategoriesScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { RequestsScreen } from "../screens/RequestsScreen";
import { ProfessionalProfileScreen } from "../screens/ProfessionalProfileScreen";
import { CreateRequestScreen } from "../screens/CreateRequestScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

const Tab = createBottomTabNavigator();

function TabIcon({
  icon,
  focused,
  color,
}: {
  icon: string;
  focused: boolean;
  color: string;
}) {
  return (
    <Text style={[styles.icon, { opacity: focused ? 1 : 0.6 }]}>{icon}</Text>
  );
}

export function TabNavigator() {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          paddingTop: 8,
          height: 85,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Solicitudes"
        component={RequestsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="🧾" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Publicar"
        component={CreateRequestScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="➕" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfessionalProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="👤" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tareas"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="✅" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensajes"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="💬" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorías"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="📁" focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon icon="⚙️" focused={focused} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});
