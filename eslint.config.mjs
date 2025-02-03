import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	{
		rules: {
			"no-console": "warn",
			"no-unused-vars": "warn",
			"no-undef": "error",
			eqeqeq: "error",
		},
	},
	eslintConfigPrettier,
];
