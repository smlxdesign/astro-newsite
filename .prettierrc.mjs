/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	arrowParens: 'always',
	proseWrap: 'preserve',
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'auto',
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
