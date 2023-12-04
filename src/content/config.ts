import { defineCollection, z } from "astro:content";

export const collections = {
  project: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        cover: image(),
        processing: z.boolean().default(false).optional(),
        title: z.string().min(5, { message: "Must be 5 characters least" }),
        description: z
          .string()
          .min(20, { message: "Must be 20 characters at least" }),
        stack: z.array(z.string()),
        demo: z.string().url(),
        source: z.string().url(),
      }),
  }),
};
