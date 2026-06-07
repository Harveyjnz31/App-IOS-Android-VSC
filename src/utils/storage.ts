import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task, AppSettings, Request } from "../types";

const TASKS_KEY = "@taskflow_tasks";
const SETTINGS_KEY = "@taskflow_settings";
const REQUESTS_KEY = "@proconnect_requests";

export const storage = {
  async saveTasks(tasks: Task[]): Promise<void> {
    try {
      await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  },

  async loadTasks(): Promise<Task[]> {
    try {
      const data = await AsyncStorage.getItem(TASKS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  },

  async saveSettings(settings: AppSettings): Promise<void> {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  },

  async loadSettings(): Promise<AppSettings> {
    try {
      const data = await AsyncStorage.getItem(SETTINGS_KEY);
      return data ? JSON.parse(data) : { darkMode: false, notifications: true };
    } catch (error) {
      console.error("Error loading settings:", error);
      return { darkMode: false, notifications: true };
    }
  },
  async saveRequests(requests: Request[]): Promise<void> {
    try {
      await AsyncStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
    } catch (error) {
      console.error("Error saving requests:", error);
    }
  },

  async loadRequests(): Promise<Request[]> {
    try {
      const data = await AsyncStorage.getItem(REQUESTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading requests:", error);
      return [];
    }
  },
};
