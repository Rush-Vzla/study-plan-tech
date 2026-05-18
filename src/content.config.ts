import { z } from 'zod';
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const stackVersionsSchema = z
  .object({
    node: z.string().optional(),
    pnpm: z.string().optional(),
    typescript: z.string().optional(),
    nestjs: z.string().optional(),
    drizzle: z.string().optional(),
    postgres: z.string().optional(),
    react: z.string().optional(),
    vite: z.string().optional(),
    docker: z.string().optional(),
    'github-actions': z.string().optional(),
  })
  .partial();

const unitTypeEnum = z.enum(['lectura-lab-checkpoint', 'referencia', 'indice', 'extra']);
const trackEnum = z.enum(['modulo-0', 'track-be', 'track-fe', 'track-devops', 'extra', 'meta']);
const tagEnum = z.enum([
  'obligatorio',
  'extra',
  'm0',
  'track-be',
  'track-fe',
  'track-devops',
  'referencia',
  'glosario',
]);

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Pedagogia
        unit_type: unitTypeEnum.default('lectura-lab-checkpoint'),
        track: trackEnum.optional(),
        estimated_hours: z.number().min(0).max(200).optional(),
        prerequisites: z.array(z.string()).default([]),
        learning_outcomes: z.array(z.string()).default([]),

        // Tags Starlight (ademas del title/description del docsSchema base)
        tags: z.array(tagEnum).default([]),

        // Versionado living-doc
        last_updated: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/)
          .optional(),
        stack_versions: stackVersionsSchema.optional(),

        // Lab metadata
        lab_path: z.string().optional(),
        lab_runnable: z.boolean().default(false),

        // Flag para diferenciar visualmente extras
        extra: z.boolean().default(false),
      }),
    }),
  }),
};
