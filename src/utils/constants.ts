import { Category, CategoryType } from "../types";

export const CATEGORIES: Category[] = [
  { id: "work", name: "Trabajo", icon: "💼", color: "#007AFF" },
  { id: "personal", name: "Personal", icon: "👤", color: "#5856D6" },
  { id: "shopping", name: "Compras", icon: "🛒", color: "#FF9500" },
  { id: "health", name: "Salud", icon: "❤️", color: "#FF3B30" },
];

export const getCategoryById = (id: CategoryType): Category => {
  return CATEGORIES.find((cat) => cat.id === id) || CATEGORIES[0];
};

export const COLORS = {
  light: {
    primary: "#007AFF",
    secondary: "#5856D6",
    accent: "#34C759",
    alert: "#FF3B30",
    background: "#F2F2F7",
    card: "#FFFFFF",
    text: "#000000",
    textSecondary: "#8E8E93",
    border: "#E5E5EA",
  },
  dark: {
    primary: "#0A84FF",
    secondary: "#5E5CE6",
    accent: "#30D158",
    alert: "#FF453A",
    background: "#1C1C1E",
    card: "#2C2C2E",
    text: "#FFFFFF",
    textSecondary: "#8E8E93",
    border: "#38383A",
  },
};
