import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AppSettings, Request } from "../types";
import { storage } from "../utils/storage";
import { v4 as uuidv4 } from "uuid";

interface AppContextType {
  settings: AppSettings;
  requests: Request[];
  addRequest: (title: string, description?: string) => void;
  toggleDarkMode: () => void;
  toggleNotifications: () => void;
  getActiveRequestsCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>({
    darkMode: false,
    notifications: true,
  });
  const [requests, setRequests] = useState<Request[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const [loadedSettings, loadedRequests] = await Promise.all([
        storage.loadSettings(),
        storage.loadRequests(),
      ]);
      setSettings(loadedSettings);
      setRequests(loadedRequests);
      setIsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (isLoaded) storage.saveSettings(settings);
  }, [settings, isLoaded]);

  useEffect(() => {
    if (isLoaded) storage.saveRequests(requests);
  }, [requests, isLoaded]);

  const addRequest = (title: string, description?: string) => {
    const newRequest: Request = {
      id: uuidv4(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    setRequests((prev) => [newRequest, ...prev]);
  };

  const toggleDarkMode = () =>
    setSettings((s) => ({ ...s, darkMode: !s.darkMode }));
  const toggleNotifications = () =>
    setSettings((s) => ({ ...s, notifications: !s.notifications }));
  const getActiveRequestsCount = () => requests.length;

  return (
    <AppContext.Provider
      value={{
        settings,
        requests,
        addRequest,
        toggleDarkMode,
        toggleNotifications,
        getActiveRequestsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
