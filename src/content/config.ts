import { defineCollection, z } from "astro:content";

export const collections = {
  project: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        cover: image(),
        processing: z.boolean().default(false).optional(),
        trash: z.boolean().default(false).optional(),
        title: z.string().min(5, {
          message: "The project title must be at least 5 characters",
        }),
        description: z.string().min(20, {
          message: "The project descruption must be at least 20 charaters",
        }),
        stack: z.array(z.string()),
        demo: z.string().url(),
        source: z.string().url(),
      }),
  }),
};
