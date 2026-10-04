## Project

- Spec (source of truth): `documents/spec/website-plan.md`. Copy (source of all site text): `documents/copy.md`.
- Task checklist: `documents/spec/tasks.md` — mark tasks `[x]` when done; one branch + PR per phase. If scope changes, update the spec first.
- Stack: Astro + TypeScript (strict) + Tailwind v4 + shadcn/ui (`accordion` only, radix-nova) via `@astrojs/react`. Theme tokens (warm cream `#f5f2ec` / `#2e2c27`, Figtree) live in `src/styles/global.css`; don't hand-edit `src/components/ui/*`.

## Development

Astro auto-backgrounds `astro dev` when it detects an agent. Pass `--ignore-lock` to keep it in the foreground (the in-app preview in `.claude/launch.json` does this):

```
npx astro dev --ignore-lock
```

`npm run build` runs `astro check` (type check) before building.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
