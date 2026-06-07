import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./src/context/AppContext";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { OnboardingScreen } from "./src/screens/OnboardingScreen";
import { storage } from "./src/utils/storage";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const seen = await storage.loadOnboardingSeen();
      setShowOnboarding(!seen);
    })();
  }, []);

  if (showOnboarding === null) return null; // loading

  return (
    <SafeAreaProvider>
      <AppProvider>
        {showOnboarding ? (
          <OnboardingScreen onFinish={() => setShowOnboarding(false)} />
        ) : (
          <NavigationContainer>
            <StatusBar style="auto" />
            <TabNavigator />
          </NavigationContainer>
        )}
      </AppProvider>
    </SafeAreaProvider>
  );
}
