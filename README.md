# Wazko Express — Landing Page

Landing page de primer nivel para **Wazko Express**, infraestructura de comercio
conversacional para PyMEs en LatAm. HTML + CSS + JavaScript puro, sin dependencias
ni build: rápida, responsive y lista para desplegar en cualquier hosting estático
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## Estructura

```
.
├── index.html        # Todas las secciones de la landing
├── styles.css        # Estilos (tema oscuro, responsive)
├── script.js         # Menú móvil, animaciones y envío del formulario
├── assets/
│   └── favicon.svg    # Ícono del sitio
└── README.md
```

## ▶️ Ver el sitio localmente

No requiere compilar. Puedes abrir `index.html` directamente, o levantar un
servidor local (recomendado para que el formulario funcione):

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

---

## ✅ PASO OBLIGATORIO — Que el formulario llegue SOLO a tu correo

El formulario usa **Formspree**, un servicio gratuito que envía los datos del
formulario **directo a tu correo** (`wazco@wazcoexpress.com`) sin necesidad de
servidor propio. Solo tú, como dueño de esa cuenta, ves la información recibida.

1. Entra a **https://formspree.io** y crea una cuenta **con el correo
   `wazco@wazcoexpress.com`** (así los leads llegan a ese buzón).
2. Crea un nuevo formulario ("New form"). Formspree te dará un endpoint así:
   `https://formspree.io/f/abcdwxyz`  → el código final (`abcdwxyz`) es tu **Form ID**.
3. En `index.html`, busca `TU_FORM_ID` y reemplázalo por tu Form ID:

   ```html
   <form ... action="https://formspree.io/f/abcdwxyz" method="POST" ...>
   ```

4. La primera vez, Formspree te enviará un correo para **confirmar** la dirección.
   Confírmalo y listo: cada envío del formulario llegará a tu bandeja.

> Mientras no configures el Form ID, el formulario muestra un aviso y **no** envía
> datos a ningún lado (lo controla `script.js`).

### Alternativas a Formspree
Si prefieres no usar Formspree, puedes apuntar el `action` del formulario a otro
servicio de email de formularios (Getform, Web3Forms, Basin) o a tu propio backend.
El JavaScript espera una respuesta `200/OK`.

---

## 📱 Configura tus números de WhatsApp

Los botones "Probar demo en vivo" y el botón flotante usan enlaces `wa.me`.
Reemplaza el número de ejemplo `573000000000` por el número real de tu bot
(formato internacional, sin `+`, sin espacios). Aparece en 3 lugares de `index.html`:

- CTA secundario del Hero
- Botón flotante de WhatsApp (abajo a la derecha)

Ejemplo para Colombia: `57` + número → `573001234567`.

---

## ✏️ Datos ya configurados

- **Correo de contacto:** `wazco@wazcoexpress.com`
- **Fundador & CEO:** Danilo Agreda — Instagram
  [@daniloagreda](https://instagram.com/daniloagreda) (con el logo de Instagram
  en el footer).
- **Precios:** Plan Inicial $49 USD/mes · Plan Pro $89 USD/mes (Más popular).

---

## 🚀 Desplegar

Sube la carpeta a cualquier hosting estático. Ejemplos:

- **Netlify / Vercel / Cloudflare Pages:** arrastra la carpeta o conecta el repo.
- **GitHub Pages:** sube los archivos a la rama y activa Pages.

Como es un sitio estático, no necesita servidor ni base de datos.
