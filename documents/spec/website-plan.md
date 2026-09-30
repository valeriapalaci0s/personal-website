# Plan: Personal website de Valeria Palacios

## Contexto
Valeria quiere su web personal desde cero, en el repo vacío `~/Documents/repos/personal-website` (git ya inicializado, rama `main`). El foco de esta sesión es el **layout**. El copy lo escribiremos juntas en otra sesión: ella guía y Claude redacta. El deploy y el dominio van al final.

Referencias revisadas:
- **joelledahboul.com**: editorial. Nombre gigante partido alrededor de una foto tipo polaroid, navbar fina, grid de proyectos con imagen grande, título y "Learn More".
- **nicolas-machado.com**: una sola página. Fondo crema, tipografía pequeña, secciones en acordeón ("more ↓").
- **fernanda-palacios.com**: tarjeta centrada con avatar, frase y botones de links.

Decisiones de Valeria:
- Estructura: una página principal más páginas de detalle por proyecto.
- Secciones: About/bio, Experiencia, Proyectos, Writing (solo un link a su Substack) y Contacto.
- Sin backend: sitio estático; el contacto es por email y redes.
- Estilo: editorial con fotos, al estilo de Joelle.

## Stack
- **Framework: Astro.** Genera un sitio estático y rápido, soporta Markdown/MDX nativo para los proyectos y funciona sin JS salvo donde lo necesitemos (acordeones, animaciones).
- **Lenguaje: TypeScript.** Astro lo soporta de forma nativa; usaremos el preset `strict` en `tsconfig.json`. Los props de los componentes, los datos (`experience.ts`, `links.ts`) y el schema de proyectos (Zod en `content.config.ts`) quedan tipados, y `astro check` valida los tipos en el build.
- **Estilos: Tailwind CSS**, con tokens de diseño (colores, tipografías, espaciado) definidos en `src/styles/global.css`.
- **UI components: shadcn/ui** (React + Radix + Tailwind, en TypeScript), integrado con `@astrojs/react`. Se inicializa con `npx shadcn@latest init` y cada componente se agrega con `npx shadcn@latest add <nombre>`; quedan en `src/components/ui/`.
  - Componentes a usar: `button`, `card`, `accordion` (Experience), `navigation-menu` (navbar desktop), `sheet` (menú móvil), `separator`, `badge` (tags de proyecto), `avatar`, `tooltip` y `sonner` (toast "Email copiado").
  - Solo cambiamos el tema de shadcn (variables CSS de color, radio y fuente) para darle el toque editorial; no hacemos componentes a mano.
  - Los componentes interactivos (Accordion, Sheet, copiar email) se cargan como islands con `client:visible` / `client:load`; el resto se queda en HTML estático.
- **Contenido:** Astro Content Collections, con un archivo `.md` por proyecto en `src/content/projects/`. Experiencia y links en `src/data/*.ts`.
- **Tipografía:** *Bricolage Grotesque* (variable, peso 500 y tracking cerrado) como display para el nombre y los títulos: moderna, juguetona y elegante. *Geist* para el texto. Todo self-hosted con `@fontsource`. Bricolage no tiene itálica, así que las palabras de acento van en semibold color `brand`.
- **Imágenes:** componente `<Image>` de Astro, que optimiza y genera tamaños automáticamente. Fotos en `src/assets/`.
- **Backend:** ninguno. Si más adelante hace falta un formulario, se puede agregar una función serverless sin cambiar el stack.
- **Deploy (paso final):** Vercel o Netlify gratis, conectado a GitHub, más un dominio propio (ej. `valeriapalacios.com`).

## Layout

### Global
- **Navbar fija y fina** (Joelle): iniciales "VP" a la izquierda; a la derecha About · Experience · Projects · Writing ↗ · Contact. Los links hacen scroll a cada sección y "Writing" abre Substack en otra pestaña. En móvil se convierte en un menú hamburguesa.
- **Footer mínimo:** © año, links de redes y "Back to top".

### Home (`/`), una sola página con scroll
1. **Hero editorial:** "Valeria" y "Palacios" en tipografía gigante, a los lados de una foto vertical tipo polaroid, con una línea pequeña debajo (ej. "ciudad, 2026"). En móvil el nombre se apila arriba y abajo de la foto.
2. **About:** párrafo de bio centrado en tipografía mediana, con alguna palabra de acento en color `brand` (como el "sidequests" de Joelle) y una segunda foto opcional. Sin título grande: solo la etiqueta "About". El resto de las secciones mantiene etiqueta + título.
3. **Experience:** `Accordion` de shadcn estilo Nicolas (rol, empresa y fechas; al abrir se ve el detalle).
4. **Projects:** grid de 2 columnas (1 en móvil) con imagen grande, título, descripción de una línea y "Learn more →", que lleva a `/projects/[slug]`.
5. **Writing:** bloque corto ("Escribo en Substack sobre…") con botón "Read on Substack ↗".
6. **Contact:** frase grande tipo "Let's talk" y botones de Email (con copiar al portapapeles, como Fernanda), LinkedIn y X/Instagram.

### Detalle de proyecto (`/projects/[slug]`)
- Imagen principal a ancho completo, título grande y metadata (rol, año, herramientas, link externo).
- Cuerpo en Markdown con imágenes, más navegación al proyecto siguiente y anterior y un link de vuelta a Projects.

### Detalles visuales
- Paleta: fondo blanco roto o crema, texto casi negro, un solo color de acento discreto y líneas finas grises como divisores.
- Animaciones sutiles: fade-in al hacer scroll y hover en las cards de proyecto. Todo respeta `prefers-reduced-motion`.
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
3. **Detalle de proyecto:** colección, template `[slug]` y 2-3 proyectos de ejemplo.
4. **Pulido:** responsive, animaciones, accesibilidad (alt text, contraste, foco visible), SEO básico (meta tags, Open Graph, favicon).
5. **(Otra sesión) Copy:** Valeria guía y Claude redacta. Se reemplazan los placeholders y se agregan sus fotos reales.
6. **(Final) Deploy y dominio:** subir el código a GitHub, conectar Vercel, comprar el dominio y configurar los DNS.

## Verificación
- `npm run dev` y abrir el sitio en el navegador integrado a 1280px y en vista móvil (375px), con screenshots de cada sección.
- Probar la navbar (scroll a cada sección), los acordeones, el botón de copiar email, que el link de Substack abra en otra pestaña y la navegación a las páginas de proyecto.
- `npx astro check` sin errores de tipos y `npm run build` sin errores, y revisar el resultado con `npm run preview`.
- Lighthouse: apuntar a más de 95 en Performance y Accessibility.
