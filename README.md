# ProConnect — Contrata profesionales P2P 🔧⚡️🚰

Plataforma móvil para conectar clientes residenciales con profesionales locales (electricistas, mecánicos, plomeros y más). Construida con React Native + Expo, diseñada para facilitar solicitudes, cotizaciones y contrataciones seguras entre vecinos y técnicos.

![React Native](https://img.shields.io/badge/React%20Native-0.81-blue)
![Expo](https://img.shields.io/badge/Expo-54-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)

## ✨ Características principales

- 📌 **Publicar solicitudes de servicio**: Los clientes describen el trabajo, adjuntan fotos y solicitan fechas.
- 🧰 **Perfil profesional**: Técnicos muestran experiencia, tarifas, portafolio y disponibilidad.
- 💬 **Cotizaciones y mensajería**: Los profesionales envían ofertas; chat integrado para coordinar detalles.
- ⭐ **Valoraciones y reseñas**: Seguimiento de reputación para generar confianza.
- 📍 **Búsqueda por zona**: Filtrar profesionales por cercanía y horario.
- 📆 **Reservas y programación**: Calendario de citas y confirmaciones.
- 🔔 **Notificaciones push**: Alertas de nuevas solicitudes, mensajes y confirmaciones.
- 💳 **Pagos**: Integración de pagos (Stripe u otro proveedor a integrar).

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

## 🛠️ Desarrollo

Si trabajas en la app localmente, estos comandos te ayudarán a preparar y ejecutar el entorno de desarrollo:

```bash
# Instalar dependencias
npm install

# Iniciar Metro (LAN) — usa la IP de tu máquina si quieres conectar dispositivos físicos
export REACT_NATIVE_PACKAGER_HOSTNAME=192.168.1.7
npx expo start --lan --clear

# Alternativa (mac/windows PowerShell):
# $env:REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.7"; npx expo start --lan --clear
```

Notas útiles:

- Si ves un error runtime relacionado con Hermes (`Cannot assign to read-only property 'NONE'`), lo hemos pospuesto temporalmente — la app sigue funcional en Expo Go. Podemos investigar y parchear dependeencias más tarde.
- El proyecto ya está versionado en: https://github.com/Harveyjnz31/App-IOS-Android-VSC.git

Si quieres que agregue CI (GitHub Actions) o normas de lint, dime y lo añado.
