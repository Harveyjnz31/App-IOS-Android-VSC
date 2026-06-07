import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";
import { PrimaryButton } from "../components/PrimaryButton";

export function HomeScreen() {
  const navigation = useNavigation();
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.hero}>
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
        <Text style={[styles.title, { color: colors.text }]}>ProConnect</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Conecta con profesionales de confianza cerca de ti
        </Text>
        <PrimaryButton
          title="Publicar solicitud"
          onPress={() => navigation.navigate("Publicar")}
          style={styles.cta}
        />
      </View>
      <View style={styles.features}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          ¿Cómo funciona?
        </Text>
        <View style={styles.featureItem}>
          <Text style={[styles.featureTitle, { color: colors.text }]}>
            Publica
          </Text>
          <Text style={[styles.featureBody, { color: colors.textSecondary }]}>
            Describe el trabajo y recibe ofertas.
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={[styles.featureTitle, { color: colors.text }]}>
            Contacta
          </Text>
          <Text style={[styles.featureBody, { color: colors.textSecondary }]}>
            Chat con profesionales y compara presupuestos.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: { padding: 24, alignItems: "center" },
  logo: { width: 96, height: 96, borderRadius: 20, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: "800" },
  subtitle: { fontSize: 16, marginTop: 8, textAlign: "center", maxWidth: 320 },
  cta: {
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  ctaText: { color: "#fff", fontWeight: "700" },
  features: { paddingHorizontal: 20, marginTop: 12 },
  sectionTitle: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  featureItem: { marginBottom: 10 },
  featureTitle: { fontSize: 16, fontWeight: "700" },
  featureBody: { fontSize: 14, marginTop: 4 },
});
