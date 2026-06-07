export type CategoryType = "work" | "personal" | "shopping" | "health";

export interface Task {
  id: string;
  title: string;
  category: CategoryType;
  completed: boolean;
  createdAt: string;
}

export interface Category {
  id: CategoryType;
  name: string;
  icon: string;
  color: string;
}

export interface AppSettings {
  darkMode: boolean;
  notifications: boolean;
}
