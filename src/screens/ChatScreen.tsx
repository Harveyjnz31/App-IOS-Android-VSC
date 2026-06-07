import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

export function ChatScreen() {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={{ padding: 20 }}>
        <Text style={[styles.title, { color: colors.text }]}>Mensajes</Text>
        <Text style={{ color: colors.textSecondary, marginTop: 12 }}>
          Aquí verás conversaciones con profesionales.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 20, fontWeight: "700" },
});
