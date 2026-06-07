import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Task, AppSettings, CategoryType } from "../types";
import { storage } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";

interface AppContextType {
  tasks: Task[];
  settings: AppSettings;
  addTask: (title: string, category: CategoryType) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  toggleDarkMode: () => void;
  toggleNotifications: () => void;
  getTasksByCategory: (category: CategoryType) => Task[];
  getActiveTasksCount: (category?: CategoryType) => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [settings, setSettings] = useState<AppSettings>({
    darkMode: false,
    notifications: true,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      storage.saveTasks(tasks);
    }
  }, [tasks, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      storage.saveSettings(settings);
    }
  }, [settings, isLoaded]);

  const loadData = async () => {
    const [loadedTasks, loadedSettings] = await Promise.all([
      storage.loadTasks(),
      storage.loadSettings(),
    ]);
    setTasks(loadedTasks);
    setSettings(loadedSettings);
    setIsLoaded(true);
  };

  const addTask = (title: string, category: CategoryType) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleDarkMode = () => {
    setSettings((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const toggleNotifications = () => {
    setSettings((prev) => ({ ...prev, notifications: !prev.notifications }));
  };

  const getTasksByCategory = (category: CategoryType) => {
    return tasks.filter(
      (task) => task.category === category && !task.completed,
    );
  };

  const getActiveTasksCount = (category?: CategoryType) => {
    if (category) {
      return tasks.filter(
        (task) => task.category === category && !task.completed,
      ).length;
    }
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        settings,
        addTask,
        toggleTask,
        deleteTask,
        toggleDarkMode,
        toggleNotifications,
        getTasksByCategory,
        getActiveTasksCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
