import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppSettings, Request } from "../types";

const SETTINGS_KEY = "@proconnect_settings";
const REQUESTS_KEY = "@proconnect_requests";

export const storage = {
  // tasks removed — ProConnect stores only requests and settings

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
