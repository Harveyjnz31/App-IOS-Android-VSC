# TaskFlow - App de Productividad

## Concepto y Visión

TaskFlow es una aplicación de gestión de tareas minimalista y elegante diseñada para ayudarte a organizar tu vida diaria. Con una interfaz limpia y fluida, puedes crear, organizar y completar tareas de manera eficiente. La app transmite calma y control, haciendo que la productividad se sienta alcanzable.

## Lenguaje de Diseño

### Dirección Estética

Diseño inspirado en iOS nativo con glassmorphism sutil, espaciado generoso y tipografía clara. Minimalismo funcional con toques de color para estados y categorías.

### Paleta de Colores

- **Primario**: `#007AFF` (Azul iOS)
- **Secundario**: `#5856D6` (Púrpura)
- **Acento**: `#34C759` (Verde éxito)
- **Alerta**: `#FF3B30` (Rojo)
- **Fondo claro**: `#F2F2F7`
- **Fondo oscuro**: `#1C1C1E`
- **Texto primario**: `#000000` / `#FFFFFF` (modo oscuro)
- **Texto secundario**: `#8E8E93`

### Tipografía

- **Principal**: System (San Francisco en iOS)
- **Títulos**: 28px bold
- **Subtítulos**: 20px semibold
- **Cuerpo**: 17px regular
- **Captions**: 13px regular

### Sistema Espacial

- Base: 8px
- Padding contenedor: 16px
- Gap entre elementos: 12px
- Border radius cards: 16px

### Filosofía de Movimiento

- Transiciones suaves de 300ms con ease-out
- Feedback táctil con scale(0.98) en press
- Slide-in para nuevos elementos de lista
- Fade para elementos eliminados

## Estructura y Layout

### Navegación

- **Tab Bar** inferior con 3 tabs: Tareas, Categorías, Ajustes
- Iconos SF Symbols style
- Indicador de tab activo con color primario

### Pantallas

1. **Tareas**: Lista de todas las tareas con filtro por estado
2. **Categorías**: Grid de categorías con contador de tareas
3. **Ajustes**: Toggle dark mode, notificaciones, sobre la app

## Features e Interacciones

### Gestión de Tareas

- Crear tarea con título y categoría
- Marcar como completada con checkbox animado
- Swipe para eliminar
- Pull-to-refresh

### Categorías

- 4 categorías predefinidas: Trabajo, Personal, Compras, Salud
- Cada una con color distintivo
- Contador de tareas activas

### Ajustes

- Dark mode con transición suave
- Notificaciones locales (programadas)
- Info de la app

### Estados

- **Default**: Tarea visible con título y categoría
- **Completed**: Tachado con opacidad reducida
- **Empty**: Ilustración con mensaje motivacional
- **Loading**: Skeleton animado

## Inventario de Componentes

### TaskItem

- Checkbox circular
- Título de tarea
- Badge de categoría
- Estados: default, completed, pressed

### CategoryCard

- Icono de categoría
- Nombre
- Contador de tareas
- Color de fondo sutil

### FloatingButton

- Botón "+" para nueva tarea
- Posición bottom-right
- Sombras sutiles

### EmptyState

- Ilustración
- Mensaje motivacional
- CTA para crear tarea

## Enfoque Técnico

### Stack

- React Native con Expo
- TypeScript
- Context API para estado global
- AsyncStorage para persistencia
- React Navigation para navegación

### Arquitectura

```
src/
├── components/     # Componentes reutilizables
├── screens/        # Pantallas principales
├── context/        # Estado global
├── hooks/          # Hooks personalizados
├── types/          # Tipos TypeScript
└── utils/          # Funciones utilitarias
```

### Modelo de Datos

```typescript
interface Task {
  id: string;
  title: string;
  category: CategoryType;
  completed: boolean;
  createdAt: Date;
}

type CategoryType = "work" | "personal" | "shopping" | "health";
```
