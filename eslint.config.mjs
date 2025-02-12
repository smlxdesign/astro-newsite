import globals from "globals";
import pluginJs from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			"node_modules/",
			"dist/",
			"build/",
			".vscode/",
			".idea/",
			".astro/",
			".git/",
		],
	},
	{
		files: ["*.ts", "*.tsx"],
		languageOptions: { parser: typescriptParser },
		plugins: [eslintPluginTypescript],
	},
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			"no-console": "warn",
			"no-unused-vars": "warn",
			"no-undef": "error",
			eqeqeq: "error",
			"no-var": "error",
		},
	},
	eslintConfigPrettier,
];
