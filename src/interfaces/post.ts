import type { RenderedContent } from "astro:content";
import type PostData from "./post-data";

export default interface Post {
	id: string;
	body?: string;
	collection: "blog";
	data: PostData;
	rendered?: RenderedContent;
	filePath?: string;
}
