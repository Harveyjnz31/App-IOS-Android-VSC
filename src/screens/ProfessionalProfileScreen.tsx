import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

export function ProfessionalProfileScreen() {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://via.placeholder.com/96" }}
            style={styles.avatar}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={[styles.name, { color: colors.text }]}>
              Nombre Profesional
            </Text>
            <Text style={[styles.meta, { color: colors.textSecondary }]}>
              Electricista · 4.8 ★
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Sobre mí
          </Text>
          <Text style={[styles.sectionBody, { color: colors.textSecondary }]}>
            Experiencia en instalaciones eléctricas residenciales y reparaciones
            rápidas.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.contactButton, { backgroundColor: colors.primary }]}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>Contactar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  avatar: { width: 96, height: 96, borderRadius: 12, backgroundColor: "#eee" },
  name: { fontSize: 20, fontWeight: "700" },
  meta: { fontSize: 14, marginTop: 4 },
  section: { marginTop: 12 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 6 },
  sectionBody: { fontSize: 14, lineHeight: 20 },
  contactButton: {
    marginTop: 18,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
