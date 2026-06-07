# TaskFlow 📱

Una aplicación de gestión de tareas hermosa y funcional construida con React Native + Expo.

![React Native](https://img.shields.io/badge/React%20Native-0.76-blue)
![Expo](https://img.shields.io/badge/Expo-52-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## ✨ Características

- ✅ **Gestión de tareas**: Crear, completar y eliminar tareas
- 📁 **Categorías**: Organiza tus tareas en Trabajo, Personal, Compras y Salud
- 🌙 **Modo Oscuro**: Cambio suave entre temas claro y oscuro
- 🔔 **Notificaciones**: Recordatorios para tus tareas
- 💾 **Persistencia**: Tus datos se guardan localmente
- 📱 **Diseño iOS**: Interfaz nativa con glassmorphism y animaciones fluidas

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+
- npm o yarn
- Expo CLI (`npm install -g expo-cli`)
- Xcode (para iOS) o Android Studio (para Android)

### Instalación

```bash
# Clonar o entrar al directorio del proyecto
cd "App IOS"

# Instalar dependencias
npm install

# Iniciar el proyecto
npx expo start
```

### Ejecutar en Dispositivo

**iOS Simulator:**

```bash
npx expo start --ios
```

**Android Emulator:**

```bash
npx expo start --android
```

**Escaneo QR (dispositivo físico):**

1. Instala la app "Expo Go" desde App Store / Play Store
2. Escanea el código QR generado

## 📁 Estructura del Proyecto

```
├── App.tsx                 # Punto de entrada principal
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── TaskItem.tsx     # Item de tarea individual
│   │   └── EmptyState.tsx   # Estado vacío
│   ├── screens/            # Pantallas principales
│   │   ├── TasksScreen.tsx # Lista de tareas
│   │   ├── CategoriesScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── context/            # Estado global
│   │   └── AppContext.tsx
│   ├── navigation/         # Configuración de navegación
│   │   └── TabNavigator.tsx
│   ├── types/              # Definiciones TypeScript
│   │   └── index.ts
│   └── utils/              # Utilidades y constantes
│       ├── constants.ts
│       └── storage.ts
├── package.json
├── app.json               # Configuración Expo
└── tsconfig.json          # Configuración TypeScript
```

## 🎨 Diseño

- **Paleta de colores**: Inspirada en iOS con azul primario (#007AFF)
- **Tipografía**: System font (San Francisco en iOS)
- **Animaciones**: Transiciones suaves de 300ms con ease-out
- **Espaciado**: Sistema de 8px base

## 📝 Licencia

MIT © 2024
