export interface Request {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  location?: string;
}

export interface AppSettings {
  darkMode: boolean;
  notifications: boolean;
}
