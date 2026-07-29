import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const docsSchema = z.object({
  added: z
    .object({
      show_badge: z.boolean().optional(),
      version: z.string()
    })
    .optional(),
  aliases: z.string().or(z.string().array()).optional(),
  description: z.string(),
  direction: z.literal('rtl').optional(),
  extra_js: z
    .object({
      async: z.boolean().optional(),
      src: z.string()
    })
    .array()
    .optional(),
  sections: z
    .object({
      description: z.string(),
      title: z.string()
    })
    .array()
    .optional(),
  thumbnail: z.string().optional(),
  title: z.string(),
  toc: z.boolean().optional(),
  types: z
    .string()
    .array()
    .optional(),
})

const docsCollection = defineCollection({
  loader: glob({
    base: './src/content/docs',
    pattern: '**/*.{md,mdx}'
  }),
  schema: docsSchema
})

const calloutsSchema = z.object({})

const calloutsCollection = defineCollection({
  loader: glob({
    base: './src/content/callouts',
    pattern: '**/*.{md,mdx}'
  }),
  schema: calloutsSchema
})

export const collections = {
  docs: docsCollection,
  callouts: calloutsCollection
}
