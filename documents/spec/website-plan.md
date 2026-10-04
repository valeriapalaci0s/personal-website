# Plan: Personal website de Valeria Palacios (v2)

## Contexto
Segunda versión, desde cero. La v1 (Astro + shadcn, diseño oscuro estilo Sonora) quedó en el historial de git (`c4a6809`) y se descartó porque Valeria prefiere algo **muy minimalista**.

- **Audiencia:** reclutadores y otros ingenieros que la encuentren.
- **Idioma:** inglés.
- **Copy:** ya escrito en [`documents/copy.md`](../copy.md), que es la fuente del texto. Este spec define estructura y diseño; el texto se toma de ahí sin reescribirlo.

**Este spec es la fuente de verdad.** Si algo cambia, primero se actualiza aquí y después en [`tasks.md`](tasks.md).

## Referencias
- **nicolas-machado.com** (base del diseño): una sola columna angosta y centrada, fondo crema, tipografía pequeña, secciones en acordeón con "more ↓ / less ↑".
- **joelledahboul.com**: solo la tipografía (Avenir: Light para el texto, Heavy para el nombre).
- **Screenshot de Valeria** (tarjeta con foto, nombre, rol e íconos sociales): inspira el encabezado.

## Decisiones de diseño
- **Layout:** una sola página, una columna centrada (~560px de ancho máximo), mucho aire alrededor. Mobile-first; en móvil es la misma columna.
- **Encabezado** (siempre visible, hace de tarjeta del About me; **centrado**, mientras las secciones de abajo van alineadas a la izquierda):
  - Foto circular pequeña (≈ 72px): `src/assets/photo.jpg`.
  - **Valeria Palacios** (peso Heavy).
  - Software Engineer @Microsoft · Based in NYC (peso Light, color secundario).
  - Fila de links: íconos de LinkedIn, X, Substack y GitHub, más un link de texto **Resume ↗**. Todos abren en otra pestaña y los íconos llevan nombre accesible.
- **Secciones en acordeón**, en este orden: **About me · Skills · Experience · Contact**.
  - Cada fila: título a la izquierda y "more ↓" / "less ↑" a la derecha, separadas por líneas finas.
  - **About me abierto por defecto**; las demás empiezan cerradas. Se pueden abrir varias a la vez.
  - About me: los dos párrafos cortos de `copy.md`.
  - Skills: las 4 líneas por categoría de `copy.md`.
  - Experience: las 4 líneas mínimas de `copy.md` (empresa · rol o años · descripción), sin agregar nada.
  - Contact: solo los links (LinkedIn, X, Substack, GitHub), sin texto ni email.
- **Tipografía:** *Figtree* (alternativa gratuita a Avenir), self-hosted. Light (300) para el texto y Heavy (800) para el nombre. Tamaños chicos, como Nicolas.
- **Color:** crema cálido. Fondo `#F5F2EC`, texto `#2E2C27`, texto secundario el mismo tono a ~70%, líneas finas al ~20%. Sin color de acento. Solo modo claro.
- **Movimiento:** solo la animación de abrir y cerrar del acordeón y el hover en links. Todo respeta `prefers-reduced-motion`.

## Stack
Se mantiene el de la v1, que ya probamos:
- **Astro** (sitio estático) + **TypeScript** `strict`.
- **Tailwind CSS** con los tokens de color y fuente en `src/styles/global.css`.
- **shadcn/ui** solo para el `accordion` (vía `@astrojs/react`, cargado como island). Valeria prefiere una librería de UI a componentes hechos a mano.
- Íconos: `lucide-react` para LinkedIn y GitHub; Substack y X como SVG simples si lucide no los trae.
- Imágenes con `<Image>` de Astro.
- Sin backend.

## Estructura de archivos
```
src/
  layouts/BaseLayout.astro     # <head>, fuentes, meta, SEO
  components/
    ui/accordion.tsx           # shadcn
    ProfileHeader.astro        # foto, nombre, rol, links
    SocialLinks.astro          # íconos (se reutiliza en Contact)
    Sections.tsx               # acordeón con las 4 secciones
  data/profile.ts              # nombre, rol, links, skills, experience (tipados, desde copy.md)
  pages/index.astro
  pages/404.astro
  assets/                      # foto (placeholder al inicio)
public/
  resume.pdf                   # ver "Pendientes"
  favicon.svg
```

## Fases
1. **Setup:** Astro + TS + Tailwind + React + shadcn (`accordion`), Figtree y tokens de color.
2. **Página:** encabezado, acordeón con las 4 secciones y el texto real de `copy.md`, más la 404.
3. **Pulido:** responsive, accesibilidad, SEO (meta, Open Graph, favicon, sitemap) y Lighthouse por encima de 95.
4. **Deploy y dominio:** Vercel + dominio propio. Valeria compra el dominio; Claude guía.

## Pendientes
- **CV público:** el PDF actual incluye el **teléfono**. Antes de publicarlo como `resume.pdf`, conviene una versión sin teléfono, o enlazar el CV de otra forma.

## Verificación
- `astro check` y `npm run build` sin errores.
- Navegador a 1280, 768 y 375px: acordeón (abre y cierra, About me abierto al cargar), todos los links correctos y abriendo en otra pestaña, sin scroll horizontal.
- Navegación completa con teclado (foco visible en filas e íconos).
- Lighthouse por encima de 95 en Performance, Accessibility, Best Practices y SEO.
