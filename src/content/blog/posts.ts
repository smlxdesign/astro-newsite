import { getCollection, type RenderedContent } from "astro:content";
import type PostData from "../../interfaces/post-data";
import type Post from "../../interfaces/post";
import toUrlFriendly from "../../utils/to-url-friendly";

const postCollection = await getCollection("blog");
console.log(getCollection("blog"));
console.log(postCollection);

export const posts: PostData[] = postCollection.map((p: Post) => {
	return {
		title: p.data.title,
		subtitle: p.data.subtitle,
		date: new Date(p.data.date),
		author: p.data.author,
		slug: toUrlFriendly(p.data.slug),
	};
});

export default posts;
