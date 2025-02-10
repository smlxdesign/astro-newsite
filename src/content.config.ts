import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		date: z.string().date(),
		author: z.string(),
		slug: z.string().refine(
			(str) => {
				console.log(str, str.search(/^[a-z0-9-]+$/));
				return !!(str.search(/^[a-z0-9-]+$/) !== -1);
			},
			{
				message: "Please only use letters, numbers, and hyphens",
			},
		),
	}),
});

export const collections = { blog };
