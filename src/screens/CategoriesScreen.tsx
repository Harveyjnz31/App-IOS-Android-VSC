import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../context/AppContext";
import { COLORS, CATEGORIES } from "../utils/constants";
import { Category } from "../types";

export function CategoriesScreen() {
  const { settings, getActiveTasksCount } = useApp();
  const navigation = useNavigation();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;

  const renderCategory = ({ item }: { item: Category }) => {
    const count = getActiveTasksCount(item.id);
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.card }]}
        activeOpacity={0.7}
      >
        <View
          style={[styles.iconContainer, { backgroundColor: item.color + "20" }]}
        >
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={[styles.categoryName, { color: colors.text }]}>
            {item.name}
          </Text>
          <Text style={[styles.taskCount, { color: colors.textSecondary }]}>
            {count} {count === 1 ? "tarea" : "tareas"} activas
          </Text>
        </View>
        <View style={[styles.countBadge, { backgroundColor: item.color }]}>
          <Text style={styles.countText}>{count}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Categorías</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Organiza tus tareas
        </Text>
      </View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 17,
    marginTop: 4,
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
    marginLeft: 14,
  },
  categoryName: {
    fontSize: 17,
    fontWeight: "600",
  },
  taskCount: {
    fontSize: 14,
    marginTop: 2,
  },
  countBadge: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  countText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
