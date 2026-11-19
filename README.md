# Wazko Express — Landing Page

Landing page de **Wazko Express**, asistente conversacional con IA para PyMEs en
LatAm: guía a los clientes en dudas y quejas por WhatsApp, recibe archivos
(fotos, PDF, comprobantes) y los interpreta. Diseño **3D futurista oscuro**,
HTML + CSS + JavaScript puro, sin dependencias ni build.

Publicado con **GitHub Pages** en el dominio **wazcoexpress.com**.

## Estructura

```
.
├── index.html        # Todas las secciones de la landing
├── styles.css        # Tema 3D futurista oscuro (glass, grid, orbes, tilt)
├── script.js         # Menú móvil, reveal, parallax, tilt 3D, contadores, formulario
├── CNAME             # Dominio personalizado (GitHub Pages)
├── robots.txt        # Rastreo + sitemap
├── sitemap.xml       # Mapa del sitio
├── llms.txt          # Resumen del sitio para IAs
├── assets/
│   ├── wazko-logo.jpg # Logo de la marca (también usado como favicon)
│   └── favicon.svg
├── docs/
│   ├── ABOUT.md       # Base de conocimiento completa del producto
│   ├── FAQ.md         # Preguntas frecuentes (para el asistente IA)
│   └── AI_CONTEXT.md  # Contexto del proyecto para IA/desarrolladores
└── README.md

## 🤖 Archivos de contexto para IA

El sitio incluye información estructurada para que IAs y buscadores entiendan
Wazko Express:
- `llms.txt` — resumen del sitio (estándar emergente para asistentes de IA).
- `robots.txt` + `sitemap.xml` — rastreo e indexación.
- Datos estructurados **schema.org (JSON-LD)** embebidos en `index.html`.
- `docs/ABOUT.md` y `docs/FAQ.md` — base de conocimiento detallada que puedes
  usar para alimentar tu propio asistente de IA.
```

## ▶️ Ver localmente

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

---

## ✅ PENDIENTE — Conectar el formulario a tu correo

El formulario usa **Formspree** para que los envíos lleguen **solo a tu correo**
(`wazco@wazcoexpress.com`) sin backend propio.

1. Entra a **https://formspree.io** y crea una cuenta con `wazco@wazcoexpress.com`.
2. Crea un formulario ("New form"). Te dará un endpoint: `https://formspree.io/f/abcdwxyz`.
3. En `index.html`, reemplaza `TU_FORM_ID` por el código final (`abcdwxyz`).
4. Confirma el correo que Formspree te envía. Listo: cada envío llega a tu bandeja.

Mientras no lo configures, el formulario muestra un aviso y no envía nada.

---

## 📱 WhatsApp / Asistente

Los botones "Hablar con el asistente" y el widget flotante abren un chat de
WhatsApp al **+57 320 927 1860** con un mensaje prellenado. Si cambias de número,
busca `573209271860` en `index.html` (aparece en el CTA del hero, el footer y el
botón flotante) y reemplázalo (formato internacional, sin `+` ni espacios).

> Nota de producto: la web **presenta** el asistente con IA (guía dudas/quejas,
> recibe archivos y los interpreta) y canaliza al cliente a WhatsApp. El
> procesamiento real de archivos con IA es una capacidad de backend/producto
> (fase posterior), no parte de esta landing estática.

---

## ✏️ Datos configurados

- **Correo:** `wazco@wazcoexpress.com`
- **WhatsApp:** +57 320 927 1860
- **Fundador & CEO:** Danilo Agreda · Instagram [@daniloagreda](https://instagram.com/daniloagreda)
- **Precios:** Plan Inicial $49 USD/mes · Plan Pro $89 USD/mes (Más popular)

---

## 🖼️ Mejorar el logo (recomendado)

El logo actual (`assets/wazko-logo.jpg`) es un JPG con fondo claro. Para que
flote limpio sobre el fondo oscuro, lo ideal es un **PNG con fondo transparente**
(o SVG). Cuando lo tengas, súbelo como `assets/wazko-logo.png` y cambia la
referencia en `index.html` (3 lugares: navbar, avatar del chat y footer).

---

## 🚀 Despliegue (GitHub Pages)

Ya está activo. Cada `git push` a `main` actualiza automáticamente el sitio en
`https://wazcoexpress.com`. El archivo `CNAME` mantiene el dominio personalizado.
