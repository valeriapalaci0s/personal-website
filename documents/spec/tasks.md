# Tasks: Personal website

Lista de tareas derivada de [website-plan.md](website-plan.md). **El spec es la fuente de verdad:** si una tarea y el spec no coinciden, manda el spec. Si cambia el alcance, primero se actualiza el spec y después esta lista.

Marca cada tarea con `[x]` al terminarla.

---

## Fase 1: Setup
- [x] 1.1 Crear el proyecto Astro en la raíz del repo (template minimal, TypeScript `strict`)
- [x] 1.2 Agregar `.gitignore` (node_modules, dist, .astro, .env)
- [x] 1.3 Instalar e integrar `@astrojs/react`
- [x] 1.4 Instalar y configurar Tailwind CSS (`src/styles/global.css`)
- [x] 1.5 Configurar el alias `@/*` en `tsconfig.json` (requerido por shadcn)
- [x] 1.6 Ejecutar `npx shadcn@latest init` (genera `components.json` y `src/lib/utils.ts`)
- [x] 1.7 Agregar los componentes shadcn: `button`, `card`, `accordion`, `navigation-menu`, `sheet`, `separator`, `badge`, `avatar`, `tooltip`, `sonner`
- [x] 1.8 Instalar las fuentes con `@fontsource` (display serif y sans) y registrarlas en el tema
- [x] 1.9 Definir los tokens del tema editorial en las variables CSS de shadcn (colores, radio, fuentes)
- [x] 1.10 Crear `src/layouts/BaseLayout.astro` (`<head>`, fuentes, estilos globales, slot)
- [x] 1.11 Verificar que `npm run dev`, `npx astro check` y `npm run build` pasen sin errores
- [x] 1.12 Commit: "Set up Astro + TS + Tailwind + shadcn"

> **Notas de la fase 1**
> - Astro 7.3, Tailwind v4, shadcn preset `radix-nova`. Geist viene del preset e Instrument Serif (normal + itálica) de `@fontsource`.
> - Tokens nuevos: `--brand` (acento terracota) → clases `text-brand` / `bg-brand`; títulos con `font-heading`.
> - `npm run build` ahora corre `astro check` antes del build.
> - Para la fase 2: `tooltip` necesita envolverse en `TooltipProvider` dentro de cada island, y `<Toaster />` de sonner lleva `theme="light"` (el sitio no tiene dark mode).

## Fase 2: Layout del home (con placeholders)
### Global
- [ ] 2.1 `src/data/links.ts`: email, LinkedIn, X/Instagram y Substack (tipados)
- [ ] 2.2 `Nav.astro`: iniciales "VP" y los links About · Experience · Projects · Writing ↗ · Contact, usando `navigation-menu`
- [ ] 2.3 `MobileNav.tsx`: menú móvil con `sheet`
- [ ] 2.4 Scroll suave a cada sección (anchors `#about`, `#experience`, etc.)
- [ ] 2.5 `Footer.astro`: © año, redes y "Back to top"
### Secciones
- [ ] 2.6 `Hero.astro`: "VALERIA" y "PALACIOS" gigantes con una foto polaroid al centro y una línea "ciudad, año" (layout apilado en móvil)
- [ ] 2.7 `About.astro`: bio centrada con acento en itálica y foto secundaria opcional
- [ ] 2.8 `src/data/experience.ts`: tipo `Experience` con 3-4 entradas placeholder
- [ ] 2.9 `ExperienceAccordion.tsx`: `accordion` de shadcn con rol, empresa, fechas y detalle
- [ ] 2.10 `Writing.astro`: texto corto y botón "Read on Substack ↗" (abre en otra pestaña)
- [ ] 2.11 `Contact.astro`: frase grande y botones de LinkedIn y X/Instagram
- [ ] 2.12 `CopyEmail.tsx`: botón que copia el email y muestra un toast con `sonner`
- [ ] 2.13 `src/pages/index.astro`: componer todas las secciones en orden
- [ ] 2.14 Agregar imágenes placeholder en `src/assets/`
- [ ] 2.15 Commit: "Home layout with placeholders"

## Fase 3: Proyectos
- [ ] 3.1 `src/content.config.ts`: colección `projects` con schema Zod (title, description, cover, role, year, tools, link, order)
- [ ] 3.2 Crear 2-3 proyectos placeholder en `src/content/projects/*.md`
- [ ] 3.3 `ProjectCard.astro`: `card` con imagen grande, título, una línea de descripción y "Learn more →"
- [ ] 3.4 `Projects.astro`: grid de 2 columnas (1 en móvil) ordenado por `order`
- [ ] 3.5 `src/pages/projects/[slug].astro`: imagen hero, título, metadata con `badge` y cuerpo en Markdown
- [ ] 3.6 Navegación al proyecto anterior/siguiente y link de vuelta a Projects
- [ ] 3.7 `src/pages/404.astro`
- [ ] 3.8 Commit: "Project collection and detail pages"

## Fase 4: Pulido
- [ ] 4.1 Revisar el responsive a 375px, 768px y 1280px
- [ ] 4.2 Fade-in al hacer scroll y hover en las cards de proyecto
- [ ] 4.3 Respetar `prefers-reduced-motion`
- [ ] 4.4 Accesibilidad: alt text, contraste, foco visible, navegación con teclado y landmarks
- [ ] 4.5 SEO: title/description por página, Open Graph, favicon y `sitemap` (`@astrojs/sitemap`)
- [ ] 4.6 Optimizar todas las imágenes con `<Image>` de Astro
- [ ] 4.7 Lighthouse: Performance y Accessibility por encima de 95
- [ ] 4.8 Commit: "Polish: responsive, a11y, SEO"

## Fase 5: Copy (sesión separada)
- [ ] 5.1 Sesión de copy: Valeria guía y Claude redacta
- [ ] 5.2 Reemplazar el copy placeholder: hero, about, writing y contact
- [ ] 5.3 Llenar `experience.ts` con la experiencia real
- [ ] 5.4 Escribir los proyectos reales en `src/content/projects/`
- [ ] 5.5 Reemplazar las fotos placeholder por las reales
- [ ] 5.6 Actualizar `links.ts` con los links reales
- [ ] 5.7 Commit: "Real content"

## Fase 6: Deploy y dominio (final)
- [ ] 6.1 Conectar el repo de GitHub a Vercel
- [ ] 6.2 Confirmar el build y el preview deploy
- [ ] 6.3 Comprar el dominio (ej. `valeriapalacios.com`)
- [ ] 6.4 Configurar los DNS y HTTPS en Vercel
- [ ] 6.5 Configurar `site` en `astro.config.mjs` con el dominio final
- [ ] 6.6 Verificación final en producción (links, OG preview, Lighthouse)
