/**
 * Takes a string and makes it url friendly by replacing disallowed characters.
 * @param {string} str - The string to be transformed
 */
export default function toUrlFriendly(str: string) {
	return str
		.toString()
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
}
