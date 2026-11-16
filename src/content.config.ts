import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const topic = z.enum(['epm', 'hdi', 'digital-twin', 'dpp', 'bim', 'education', 'other']);

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    type: z.enum(['journal', 'conference', 'thesis', 'other']),
    year: z.number(),
    authors: z.string(),
    title: z.string(),
    venue: z.string(),
    url: z.string().url().optional(),
    indexing: z.string().optional(),
    topics: z.array(topic).default(['other']),
    featured: z.boolean().default(false),
  }),
});

const localized = z.object({
  title: z.string(),
  role: z.string(),
  summary: z.string(),
  body: z.string().default(''),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    start: z.number(),
    end: z.union([z.number(), z.literal('present')]),
    funder: z.string().optional(),
    partners: z.string().optional(),
    link: z.string().url().optional(),
    topics: z.array(topic).default(['other']),
    featured: z.boolean().default(false),
    en: localized,
    es: localized,
  }),
});

const journey = defineCollection({
  loader: file('src/data/journey.yaml'),
  schema: z.object({
    line: z.enum(['academia', 'ventures', 'industry', 'education']),
    start: z.number(),
    end: z.union([z.number(), z.literal('now')]).optional(),
    title_en: z.string(),
    title_es: z.string(),
    org: z.string(),
    side: z.enum(['above', 'below']).default('above'),
    tier: z.number().default(1),
    project: z.string().optional(),
  }),
});

export const collections = { publications, projects, journey };
