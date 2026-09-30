## Project

- Spec (source of truth): `documents/spec/website-plan.md`
- Task checklist: `documents/spec/tasks.md` — mark tasks `[x]` as they are completed. If scope changes, update the spec first, then the tasks.
- Stack: Astro + TypeScript (strict) + Tailwind v4 + shadcn/ui (radix-nova) via `@astrojs/react`. Theme tokens live in `src/styles/global.css`; don't hand-edit `src/components/ui/*`, restyle through the tokens.

## Development

Astro auto-backgrounds `astro dev` when it detects an agent. To keep it in the foreground (e.g. for the in-app preview in `.claude/launch.json`), pass `--ignore-lock`:

```
npx astro dev --ignore-lock
```

Otherwise, a background server is managed with `astro dev stop`, `astro dev status`, and `astro dev logs`.

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
