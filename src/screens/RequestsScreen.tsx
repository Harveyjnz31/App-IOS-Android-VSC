import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

export function RequestsScreen() {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  // Placeholder data
  const data = [];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Solicitudes</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Publicaciones recientes
        </Text>
      </View>

      {data.length === 0 ? (
        <View style={styles.empty}>
          <Text style={{ color: colors.textSecondary }}>
            Aún no hay solicitudes.
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(i) => String(i.id)}
          renderItem={() => null}
        />
      )}

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  title: { fontSize: 32, fontWeight: "700" },
  subtitle: { fontSize: 14, marginTop: 4 },
  empty: { flex: 1, justifyContent: "center", alignItems: "center" },
  fab: {
    position: "absolute",
    bottom: 28,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  fabIcon: { color: "#fff", fontSize: 28 },
});
