import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useApp } from "../context/AppContext";
import { COLORS } from "../utils/constants";

export function CreateRequestScreen() {
  const { settings } = useApp();
  const colors = settings.darkMode ? COLORS.dark : COLORS.light;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePublish = () => {
    // placeholder: integrar lógica para publicar solicitud
    setTitle("");
    setDescription("");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={{ padding: 20 }}>
        <Text style={[styles.label, { color: colors.text }]}>Título</Text>
        <TextInput
          style={[
            styles.input,
            { backgroundColor: colors.card, color: colors.text },
          ]}
          value={title}
          onChangeText={setTitle}
          placeholder="¿Qué servicio necesitas?"
          placeholderTextColor={colors.textSecondary}
        />

        <Text style={[styles.label, { color: colors.text, marginTop: 12 }]}>
          Descripción
        </Text>
        <TextInput
          multiline
          style={[
            styles.textarea,
            { backgroundColor: colors.card, color: colors.text },
          ]}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe el trabajo, adjunta fotos luego"
          placeholderTextColor={colors.textSecondary}
        />

        <TouchableOpacity
          style={[styles.publish, { backgroundColor: colors.primary }]}
          onPress={handlePublish}
        >
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            Publicar solicitud
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { fontSize: 14, fontWeight: "600" },
  input: { marginTop: 8, padding: 12, borderRadius: 10, fontSize: 16 },
  textarea: {
    marginTop: 8,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    height: Platform.OS === "ios" ? 140 : 160,
    textAlignVertical: "top",
  },
  publish: {
    marginTop: 18,
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
});
