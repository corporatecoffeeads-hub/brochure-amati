# Café Amati · Presentación de marca

Brochure web interactivo de Café Amati / Corporate Coffee, sin precios. Incluye:

1. **¿Por qué elegirnos?**: trazabilidad al 100% y ventajas de la marca.
2. **Origen**: el grano Arábica de Perú (perfil, puntaje SCA, altitud).
3. **Nuestro café**: 5 clásicos y 5 aromatizados, todos 100% Arábica.
4. **Tu café ideal**: recomendador por intensidad, tueste, acidez o sabor.
5. **Contacto**: WhatsApp.

Hecho con React 18, Vite 5 y Tailwind CSS 3. Funciona 100 % en el navegador.

## Versión PDF

El botón «Descargar PDF» abre la impresión del navegador con un diseño propio: A4 horizontal, una sección por página e incluye una guía de perfiles de los clásicos. Elige «Guardar como PDF» y activa «Gráficos de fondo» si el navegador lo pregunta.

## Uso local

```bash
npm install
npm run dev
npm run build
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo y sube el contenido de esta carpeta (incluida `.github`) a la rama `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Cada `push` a `main` publica el sitio en `https://<usuario>.github.io/<repositorio>/`.

## Configuración

- Productos y textos: `src/data/catalog.js`.
- WhatsApp: `src/data/site.js`.

## Medición (Google Analytics 4)

- ID de medición: `G-WV9BB10MBG`, en `index.html`. Para cambiarlo, reemplázalo en las dos apariciones.
- Visitas: se registran automáticamente.
- Evento `click_whatsapp` con el parámetro `ubicacion` (boton_flotante, contacto, formulario, como-comprar, crea-tu-marca, pie_de_pagina).
- Catálogo: evento `descarga_diseno` en «Crea tu marca». Brochure: evento `descarga_pdf`.
- Lógica en `src/analytics.js`.
