import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    members: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          image: z.string().optional(),
        }),
      )
      .optional(),
    testimonials: z
      .array(
        z.object({
          quote: z.string(),
          author: z.string(),
        }),
      )
      .optional(),
  }),
});

const concerts = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/concerts' }),
  schema: z.object({
    date: z.string(),
    venue: z.string(),
    time: z.string().optional(),
    image: z.string().optional(),
    url: z.string().optional(),
  }),
});

const tracks = defineCollection({
  loader: file('./src/content/tracks.json'),
  schema: z.object({
    title: z.string(),
    src: z.string(),
  }),
});

export const collections = { pages, concerts, tracks };
