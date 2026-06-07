import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RequestsScreen } from "../screens/RequestsScreen";
import { ProfessionalProfileScreen } from "../screens/ProfessionalProfileScreen";
import { ChatScreen } from "../screens/ChatScreen";

const Stack = createNativeStackNavigator();

export function RequestsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="RequestsList"
        component={RequestsScreen}
        options={{ title: "Solicitudes" }}
      />
      <Stack.Screen
        name="ProfessionalProfile"
        component={ProfessionalProfileScreen}
        options={{ title: "Perfil" }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ title: "Chat" }}
      />
    </Stack.Navigator>
  );
}
