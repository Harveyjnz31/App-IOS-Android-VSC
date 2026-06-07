QA Checklist - ProConnect (versión inicial)

Objetivos: validar flujo principal de publicación/contratación y calidad básica UI/UX.

1. Instalación y arranque

- [ ] `npm install` sin errores
- [ ] `npx expo start` muestra QR y app carga en Expo Go

2. Onboarding

- [ ] Onboarding aparece solo en primer arranque
- [ ] Al pulsar "Comenzar" se guarda flag y no vuelve a mostrarse

3. Publicar solicitud

- [ ] Desde `Inicio` el botón "Publicar solicitud" abre el formulario
- [ ] Se puede completar título/descripcion y publicar
- [ ] La solicitud aparece en `Solicitudes`

4. Perfil profesional

- [ ] Acceder a perfil de ejemplo
- [ ] Botón "Contactar" visible y funciona (abrir chat placeholder)

5. UI y usabilidad

- [ ] CTAs (botones) usan estilo consistente
- [ ] Colores y contraste aceptable en tema claro y oscuro
- [ ] Textos no truncados en pantallas comunes

6. Test en dispositivos reales

- [ ] Probar en iOS (dispositivo físico) con Expo Go
- [ ] Probar en Android (dispositivo físico) con Expo Go

7. Rendimiento básico

- [ ] Tiempo de carga razonable (<5s en red local)
- [ ] Sin warnings críticos en consola

8. Seguridad y permisos

- [ ] Revisar permisos solicitados (ubicación, notificaciones)

Notas:

- Añadir fallbacks y validaciones adicionales según resultados de pruebas.
