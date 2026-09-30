# Plan: Personal website de Valeria Palacios

## Contexto
Valeria quiere su web personal desde cero, en el repo vacío `~/Documents/repos/personal-website` (git ya inicializado, rama `main`). El foco de esta sesión es el **layout**. El copy lo escribiremos juntas en otra sesión: ella guía y Claude redacta. El deploy y el dominio van al final.

Referencias revisadas:
- **joelledahboul.com**: editorial. Nombre gigante partido alrededor de una foto tipo polaroid, navbar fina, grid de proyectos con imagen grande, título y "Learn More".
- **nicolas-machado.com**: una sola página. Fondo crema, tipografía pequeña, secciones en acordeón ("more ↓").
- **fernanda-palacios.com**: tarjeta centrada con avatar, frase y botones de links.
- **Sonora (plantilla de Lovable, demo en kindred-spark-909.lovable.app)**: **referencia principal de diseño desde la fase 2b.** Foto a sangre completa de fondo, título gigante en blanco (mayúsculas, peso 900, tracking muy cerrado), nombre pequeño en negrita arriba a la izquierda, píldora blanca como botón, y abajo una fila con subtítulo, fecha y píldora.

Decisiones de Valeria:
- Estructura: una página principal más páginas de detalle por proyecto.
- Secciones: About/bio, Experiencia, Proyectos, Writing (solo un link a su Substack) y Contacto.
- Sin backend: sitio estático; el contacto es por email y redes.
- Estilo: **oscuro y bold al estilo Sonora** (reemplaza la dirección editorial clara estilo Joelle, que se probó en la fase 2 y se descartó). Hero con una foto de montañas de fondo y todas las secciones debajo, también oscuras.

## Stack
- **Framework: Astro.** Genera un sitio estático y rápido, soporta Markdown/MDX nativo para los proyectos y funciona sin JS salvo donde lo necesitemos (acordeones, animaciones).
- **Lenguaje: TypeScript.** Astro lo soporta de forma nativa; usaremos el preset `strict` en `tsconfig.json`. Los props de los componentes, los datos (`experience.ts`, `links.ts`) y el schema de proyectos (Zod en `content.config.ts`) quedan tipados, y `astro check` valida los tipos en el build.
- **Estilos: Tailwind CSS**, con tokens de diseño (colores, tipografías, espaciado) definidos en `src/styles/global.css`.
- **UI components: shadcn/ui** (React + Radix + Tailwind, en TypeScript), integrado con `@astrojs/react`. Se inicializa con `npx shadcn@latest init` y cada componente se agrega con `npx shadcn@latest add <nombre>`; quedan en `src/components/ui/`.
  - Componentes a usar: `button`, `card`, `accordion` (Experience), `navigation-menu` (navbar desktop), `sheet` (menú móvil), `separator`, `badge` (tags de proyecto), `avatar`, `tooltip` y `sonner` (toast "Email copiado").
  - Solo cambiamos el tema de shadcn (variables CSS de color, radio y fuente) para darle el look de Sonora; no hacemos componentes a mano.
  - Los componentes interactivos (Accordion, Sheet, copiar email) se cargan como islands con `client:visible` / `client:load`; el resto se queda en HTML estático.
- **Contenido:** Astro Content Collections, con un archivo `.md` por proyecto en `src/content/projects/`. Experiencia y links en `src/data/*.ts`.
- **Tipografía:** *Inter* (variable, `@fontsource-variable/inter`, self-hosted) para todo el sitio. Es casi idéntica a la fuente del sistema que usa Sonora (San Francisco Black), pero se ve igual en todos los dispositivos.
  - **Display** (nombre y títulos): peso 900, MAYÚSCULAS, tracking alrededor de `-0.05em` y line-height alrededor de `0.85`.
  - **Etiquetas, navbar y botones:** peso 700, mayúsculas, 12–13px, tracking normal o levemente abierto.
  - **Texto:** peso 400–500.
  - Reemplaza a Bricolage Grotesque + Geist (fase 2), que se descartaron.
- **Imágenes:** componente `<Image>` de Astro, que optimiza y genera tamaños automáticamente. Fotos en `src/assets/`.
- **Backend:** ninguno. Si más adelante hace falta un formulario, se puede agregar una función serverless sin cambiar el stack.
- **Deploy (paso final):** Vercel o Netlify gratis, conectado a GitHub, más un dominio propio (ej. `valeriapalacios.com`).

## Layout

### Global
- **Navbar fija** estilo Sonora: "VALERIA PALACIOS" en negrita, mayúsculas y tamaño pequeño a la izquierda. A la derecha, los links About · Experience · Projects · Writing ↗ en mayúsculas pequeñas y una píldora blanca "CONTACT". Sobre el hero es transparente; al hacer scroll gana fondo oscuro con blur. Los links hacen scroll a cada sección y "Writing" abre Substack en otra pestaña. En móvil: el nombre a la izquierda y un botón de menú a la derecha, que abre un `sheet` oscuro a pantalla completa con los links en tipografía display grande.
- **Footer mínimo:** © año, links de redes y "Back to top", en texto pequeño gris sobre el fondo oscuro.

### Home (`/`), una sola página con scroll
1. **Hero (estilo Sonora):** pantalla completa (`100svh`) con la **foto de montañas** a sangre completa de fondo (placeholder hasta la fase 5) y un degradado oscuro encima para que el texto se lea. "VALERIA" y "PALACIOS" en dos líneas gigantes blancas, Inter 900 en mayúsculas, alineadas a la izquierda. Abajo, una fila: rol a la izquierda (ej. "PRODUCT & WRITING"), "CIUDAD, 2026" y una píldora blanca "CONTACT" que baja a `#contact`. El copy exacto va en la fase 5.
2. **About:** etiqueta pequeña "ABOUT" y la bio en texto grande blanco (más o menos 24–32px), alineada a la izquierda, con mucho aire. Sin fotos tipo polaroid.
3. **Experience:** etiqueta más título grande en mayúsculas 900. `Accordion` de shadcn con divisores finos `white/10`: rol, empresa y fechas; al abrir se ve el detalle.
4. **Projects:** etiqueta más título. Grid de 2 columnas (1 en móvil) con imagen grande de esquinas levemente redondeadas, título en mayúsculas bold, una línea de descripción y "LEARN MORE →", que lleva a `/projects/[slug]`.
5. **Writing:** etiqueta más título, una línea de texto y una píldora blanca "READ ON SUBSTACK ↗".
6. **Contact:** "LET'S TALK" gigante en el estilo display. Debajo, una píldora blanca con el email (copia al portapapeles y muestra un toast) y píldoras con borde para LinkedIn, Instagram y X.

### Detalle de proyecto (`/projects/[slug]`)
- Mismo lenguaje visual que el home (oscuro, títulos 900 en mayúsculas). Imagen principal a ancho completo, título grande y metadata (rol, año, herramientas, link externo).
- Cuerpo en Markdown con imágenes, más navegación al proyecto siguiente y anterior y un link de vuelta a Projects.

### Detalles visuales
- **Paleta (solo modo oscuro):** fondo casi negro (≈ `#0b0b0b`), texto blanco, texto secundario gris claro, divisores `white/10` y botones en píldora blanca con texto negro (primarios) o con borde blanco (secundarios). Sin color de acento: el color lo ponen las fotos. El `<Toaster>` de sonner va con `theme="dark"`.
- **Forma:** píldoras (`rounded-full`) para botones; imágenes con radio pequeño.
- Animaciones sutiles: fade-in al hacer scroll, zoom leve en las imágenes de proyecto al hacer hover y la navbar ganando fondo al hacer scroll. Todo respeta `prefers-reduced-motion`.
- Responsive mobile-first.

## Estructura de archivos
```
src/
  layouts/BaseLayout.astro        # <head>, fuentes, Nav, Footer
  components/
    ui/                           # componentes shadcn generados por el CLI
    Nav.astro  DesktopNav.tsx  MobileNav.tsx  Footer.astro
    SectionHeader.astro           # eyebrow + título compartido por las secciones
    ExperienceAccordion.tsx  CopyEmail.tsx
    Hero.astro  About.astro  Experience.astro
    ProjectCard.astro  Projects.astro
    Writing.astro  Contact.astro
  lib/utils.ts                    # helper cn() de shadcn
  pages/
    index.astro                   # compone las secciones
    projects/[slug].astro         # detalle de proyecto
    404.astro
  content/projects/*.md           # 2-3 proyectos placeholder
  content.config.ts               # schema de la colección de proyectos
  data/experience.ts  data/links.ts
  assets/                         # fotos (placeholders al inicio)
  styles/global.css               # Tailwind + tokens
```

## Fases
1. **Setup:** `npm create astro@latest` (template minimal, TypeScript strict), `@astrojs/react`, Tailwind, `shadcn init` más los componentes listados, fuentes, tokens y el `BaseLayout` con Nav y Footer. Primer commit.
2. **Layout del home:** las 6 secciones con **copy e imágenes placeholder** (lorem y fotos de muestra).
   - **2b. Rediseño estilo Sonora:** tema oscuro, Inter 900, hero con la foto de montañas, navbar y secciones rehechas con el nuevo lenguaje visual. Reutiliza la estructura, los datos y las islas de la fase 2.
3. **Detalle de proyecto:** colección, template `[slug]` y 2-3 proyectos de ejemplo.
4. **Pulido:** responsive, animaciones, accesibilidad (alt text, contraste, foco visible), SEO básico (meta tags, Open Graph, favicon).
5. **(Otra sesión) Copy:** Valeria guía y Claude redacta. Se reemplazan los placeholders y se agregan sus fotos reales.
6. **(Final) Deploy y dominio:** subir el código a GitHub, conectar Vercel, comprar el dominio y configurar los DNS.

## Verificación
- `npm run dev` y abrir el sitio en el navegador integrado a 1280px y en vista móvil (375px), con screenshots de cada sección.
- Probar la navbar (scroll a cada sección), los acordeones, el botón de copiar email, que el link de Substack abra en otra pestaña y la navegación a las páginas de proyecto.
- `npx astro check` sin errores de tipos y `npm run build` sin errores, y revisar el resultado con `npm run preview`.
- Lighthouse: apuntar a más de 95 en Performance y Accessibility.
