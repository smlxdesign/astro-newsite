import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		date: z.string().date(),
		author: z.string(),
		slug: z.string().refine((str) => str.search(/[a-z0-9-]/gm) >= 0),
	}),
});

export const collections = { blog };
