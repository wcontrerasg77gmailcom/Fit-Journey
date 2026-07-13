# Fit Journey PWA

Aplicación web progresiva original para iPhone, inspirada en patrones generales de apps de entrenamiento, sin copiar marca, diseño, textos ni contenido propietario de Freeletics.

## Incluye
- Programa de 4 días en gimnasio + sesión opcional de kettlebells.
- Biblioteca de ejercicios bilingüe con músculos, técnica, series, repeticiones, descansos, cargas iniciales y enlaces.
- Registro de cargas/repeticiones por serie.
- Cronómetro de descanso.
- Fases de 52 semanas.
- Nutrición y cálculo de macros.
- Medidas y exportación de respaldo.
- Uso sin conexión después de la primera carga.

## Cómo probar en computadora
Ejecutar un servidor local dentro de esta carpeta:
`python -m http.server 8000`
y abrir `http://localhost:8000`.

## Cómo instalar en iPhone
Una PWA debe estar alojada en HTTPS. Sube esta carpeta a GitHub Pages, Netlify, Vercel o un hosting equivalente. Después:
1. Abre la URL en Safari.
2. Toca Compartir.
3. Toca “Agregar a pantalla de inicio”.
4. Abre Fit Journey desde el ícono.

Abrir directamente index.html desde Archivos no habilita correctamente el service worker ni la instalación completa.
