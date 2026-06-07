import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS, getCategoryById } from "../utils/constants";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const { settings, toggleTask, deleteTask } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;
  const category = getCategoryById(task.category);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
    >
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.card }]}
        onPress={handlePress}
        onLongPress={handleDelete}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.checkbox,
            task.completed && {
              backgroundColor: colors.accent,
              borderColor: colors.accent,
            },
            { borderColor: colors.textSecondary },
          ]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <View style={styles.content}>
          <Text
            style={[
              styles.title,
              { color: colors.text },
              task.completed && styles.completedTitle,
            ]}
            numberOfLines={2}
          >
            {task.title}
          </Text>
          <View style={styles.meta}>
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: category.color + "20" },
              ]}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={[styles.categoryText, { color: category.color }]}>
                {category.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 6,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  categoryIcon: {
    fontSize: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
