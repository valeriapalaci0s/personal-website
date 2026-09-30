import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, shown on the card. */
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      role: z.string(),
      year: z.number().int(),
      tools: z.array(z.string()).default([]),
      /** Optional external link (live site, repo, case study). */
      link: z.url().optional(),
      /** Sort order on the home grid, ascending. */
      order: z.number().int(),
    }),
});

export const collections = { projects };
