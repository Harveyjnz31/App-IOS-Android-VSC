import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

interface EmptyStateProps {
  filter: "all" | "active" | "completed";
}

const MESSAGES = {
  all: {
    emoji: "🎉",
    title: "¡Sin tareas!",
    subtitle: "Toca el botón + para crear tu primera tarea",
  },
  active: {
    emoji: "✨",
    title: "¡Todo hecho!",
    subtitle: "No tienes tareas pendientes. ¡Buen trabajo!",
  },
  completed: {
    emoji: "📝",
    title: "Sin tareas completadas",
    subtitle: "Completa una tarea para verla aquí",
  },
};

export function EmptyState({ filter }: EmptyStateProps) {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;
  const message = MESSAGES[filter];

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{message.emoji}</Text>
      <Text style={[styles.title, { color: colors.text }]}>
        {message.title}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {message.subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingBottom: 100,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
});
