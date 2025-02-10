export default interface PostData {
	/** @name title @type string @description Title shown on the posts list, the post's page - both in the hero section, as well as in the <title/> tag. */
	title: string;
	/** @name subtitle @type string @description The subtitle shown below the title, at the posts list, and post's page. */
	subtitle: string;
	/** @name date @type string @description The date the article was last updated. Does not schedule posts if set to a date in the future. */
	date: string;
	/** @name author @type string @description Author of article. If multiple, place a comma between names. Oxford comma should be used in that case. */
	author: string;
	/** @name slug @type string @description Used in the page's url: /blog/:slug. Should **ONLY** use alphanumeric characters as well as hyphens. */
	slug: string;
}
