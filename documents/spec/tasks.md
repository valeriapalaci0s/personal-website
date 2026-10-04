# Tasks: Personal website (v2)

Lista derivada de [website-plan.md](website-plan.md). **El spec es la fuente de verdad**; el texto sale de [copy.md](../copy.md). Si cambia el alcance, primero se actualiza el spec.

Marca cada tarea con `[x]` al terminarla. Una rama y un PR por fase.

---

## Fase 1: Setup
- [x] 1.1 Crear el proyecto Astro (template minimal, TypeScript `strict`) en la raíz del repo
- [x] 1.2 Integrar `@astrojs/react` y Tailwind CSS
- [x] 1.3 Alias `@/*` en `tsconfig.json`; `shadcn init` y `shadcn add accordion`
- [x] 1.4 Instalar Figtree (`@fontsource-variable/figtree`) y definir los tokens en `global.css`: fondo `#F5F2EC`, texto `#2E2C27`, secundario y líneas
- [x] 1.5 `BaseLayout.astro` con `<head>`, fuentes y estilos globales
- [x] 1.6 `npm run build` corre `astro check` antes del build; verificar que pase sin errores
- [x] 1.7 Commit: "Set up Astro, Tailwind, shadcn and Figtree"

> **Notas de la fase 1**
> - Astro 7.3, Tailwind v4, shadcn `radix-nova`. Solo se instaló `accordion`; el `button.tsx` que crea `init` se borró porque no se usa.
> - Tokens en `global.css`: texto secundario `#6a6762` (≈ 70% del texto, contraste 5.4:1 sobre el crema) y líneas `#cdcac5` (≈ 20%). Se quitó el bloque `.dark`: el sitio es solo modo claro.
> - `shadcn` está en `devDependencies`: solo aporta `shadcn/tailwind.css` en el build. `npm audit` marca 7 vulnerabilidades altas en las dependencias de su CLI (`braces`/`micromatch`, DoS con patrones glob). No llegan al sitio publicado, y el fix de npm (bajar a shadcn 1.0.0) rompería el import, así que no se aplicó.
> - Favicon provisional "VP" en `public/favicon.svg`; el definitivo va en la fase 3.

## Fase 2: Página
- [x] 2.1 `src/data/profile.ts`: nombre, rol, ubicación, links, skills y experience, tipados y copiados de `copy.md`
- [x] 2.2 Foto placeholder circular en `src/assets/`
- [x] 2.3 `SocialLinks.astro`: íconos de LinkedIn, X, Substack y GitHub, en otra pestaña y con nombre accesible
- [x] 2.4 `ProfileHeader.astro`: foto, nombre (Heavy), rol · ubicación (Light), `SocialLinks` y link "Resume ↗"
- [x] 2.5 `Sections.tsx`: acordeón de shadcn con About me (abierto por defecto), Skills, Experience y Contact, con "more ↓ / less ↑"
- [x] 2.6 Contenido de cada sección según `copy.md`, sin agregar texto
- [x] 2.7 `index.astro` (columna centrada de ~560px) y `404.astro`
- [x] 2.8 Verificar en 1280, 768 y 375px
- [x] 2.9 Commit: "Single-page layout with real copy"

> **Notas de la fase 2**
> - Íconos: X, Substack y GitHub salen de `simple-icons` (CC0). LinkedIn ya no está en esa librería (lo quitaron a pedido de LinkedIn), así que su logo está dibujado en `SocialIcon.tsx`. `lucide-react` ya no trae logos de marcas.
> - El link **Resume ↗** está implementado pero oculto mientras `profile.resumeUrl` sea `undefined`. Se activa cuando haya un CV sin teléfono (tarea 4.1).
> - El acordeón (`Sections.tsx`) carga con `client:load` y viene renderizado desde el servidor con About me abierto, así que se lee aunque falle el JS. Las etiquetas "more ↓ / less ↑" tienen `aria-hidden` y el estado lo anuncia `aria-expanded`.
> - Foto: `src/assets/photo.jpg` (la de Valeria; reemplazó al placeholder inicial).
> - Verificado en 1280, 760 y 375px: columna centrada de 560px, las 4 secciones abren y cierran, los 9 links son correctos y abren en otra pestaña (salvo `mailto:`), y no hay scroll horizontal. En el panel del navegador, los clics con coordenadas no llegan bien a la página, así que el acordeón se probó con clics programáticos.

## Fase 3: Pulido
- [ ] 3.1 Accesibilidad: foco visible, navegación con teclado, contraste, alt text, landmarks
- [ ] 3.2 Respetar `prefers-reduced-motion` en el acordeón
- [ ] 3.3 SEO: title y description, Open Graph con imagen, favicon, `@astrojs/sitemap` y `robots.txt`
- [ ] 3.4 Lighthouse por encima de 95 en las 4 categorías (móvil y desktop)
- [ ] 3.5 Commit: "Polish: a11y, SEO"

## Fase 4: Deploy y dominio
- [ ] 4.1 CV público (sin teléfono) en el sitio. *(La foto real ya se agregó en la fase 2.)*
- [ ] 4.2 Conectar el repo de GitHub a Vercel y revisar el preview deploy
- [ ] 4.3 Comprar el dominio (Valeria) y configurar DNS y HTTPS en Vercel
- [ ] 4.4 `site` en `astro.config.mjs` con el dominio final
- [ ] 4.5 Verificación final en producción: links, preview al compartir y Lighthouse
