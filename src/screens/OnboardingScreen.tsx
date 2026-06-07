import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

export function OnboardingScreen() {
  const navigation = useNavigation();
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Bienvenido a ProConnect
        </Text>
        <Text style={[styles.body, { color: colors.textSecondary }]}>
          Encuentra y contrata profesionales locales de confianza en minutos.
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 10 },
  body: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12 },
  buttonText: { color: "#fff", fontWeight: "700" },
});
