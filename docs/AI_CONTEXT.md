# Contexto del proyecto para IA / desarrolladores

Este archivo orienta a cualquier IA o desarrollador que vaya a mantener o
extender este sitio.

## Qué es este repositorio
Landing page de **Wazko Express** (ver `docs/ABOUT.md` para el producto). Sitio
estático sin build, desplegado en **GitHub Pages** con dominio **wazcoexpress.com**.

## Stack
- HTML + CSS + JavaScript puro (sin frameworks, sin bundler, sin dependencias).
- Fuentes: Google Fonts (Sora + Inter).
- Hosting: GitHub Pages. Dominio en `CNAME`.

## Estructura
```
index.html         Marcado de todas las secciones
styles.css         Tema 3D futurista oscuro (variables CSS en :root)
script.js          Interacciones: menú, reveal, parallax 3D, tilt, contadores, formulario
CNAME              wazcoexpress.com
robots.txt         Rastreo + referencia a sitemap
sitemap.xml        Mapa del sitio
llms.txt           Resumen del sitio para IAs
assets/            Logo e íconos
docs/              Base de conocimiento (ABOUT, FAQ, este archivo)
```

## Convenciones de diseño
- Tema oscuro. Paleta en `:root`: `--c1` teal, `--c2` azul, `--c3` violeta, `--c4` naranja.
- Efecto "glass" (glassmorphism) con la clase `.glass`.
- Profundidad 3D: `perspective` en secciones; `[data-tilt]` para inclinación al
  mouse + brillo; `[data-reveal]` para animación de entrada; parallax por scroll
  en `script.js`. Todo respeta `prefers-reduced-motion`.
- Mantener textos cortos (máx. ~3 líneas por bloque), viñetas y negritas puntuales.

## Puntos de configuración (buscar y reemplazar en index.html)
- `TU_FORM_ID` → ID del formulario de Formspree (los leads van a wazco@wazcoexpress.com).
- `573209271860` → número de WhatsApp del asistente (hero, footer, botón flotante).
- Logo: `assets/wazko-logo.jpg` (idealmente sustituir por un PNG transparente).

## Despliegue
Cada `git push` a `main` actualiza el sitio en producción (GitHub Pages).
No borrar `CNAME` (perdería el dominio personalizado).

## Pendientes / siguientes fases
- Conectar el formulario (Formspree) para recibir leads.
- Logo en PNG transparente para el tema oscuro.
- Asistente de IA funcional (backend): la landing solo presenta la capacidad y
  canaliza a WhatsApp; el procesamiento real de archivos con IA requiere backend
  y una API de IA.
