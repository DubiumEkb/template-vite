import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import reactRefresh from "eslint-plugin-react-refresh"
import react from "eslint-plugin-react"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	{
		ignores: [
			"**/.next/",
			"**/logs",
			"**/*.log",
			"**/npm-debug.log*",
			"**/yarn-debug.log*",
			"**/yarn-error.log*",
			"**/lerna-debug.log*",
			"**/.pnpm-debug.log*",
			"**/package-lock.json",
			"**/report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",
			"**/pids",
			"**/*.pid",
			"**/*.seed",
			"**/*.pid.lock",
			"**/lib-cov",
			"**/coverage",
			"**/*.lcov",
			"**/.nyc_output",
			"**/.grunt",
			"**/bower_components",
			"**/.lock-wscript",
			"build/Release",
			"**/node_modules/",
			"**/jspm_packages/",
			"**/web_modules/",
			"**/*.tsbuildinfo",
			"**/.npm",
			"**/.eslintcache",
			"**/.stylelintcache",
			"**/.rpt2_cache/",
			"**/.rts2_cache_cjs/",
			"**/.rts2_cache_es/",
			"**/.rts2_cache_umd/",
			"**/.node_repl_history",
			"**/*.tgz",
			"**/.yarn-integrity",
			"**/.env",
			"**/.env.development.local",
			"**/.env.test.local",
			"**/.env.production.local",
			"**/.env.local",
			"**/.cache",
			"**/.parcel-cache",
			"**/.next",
			"**/out",
			"**/.nuxt",
			"**/dist",
			"**/.cache/",
			".vuepress/dist",
			"**/.temp",
			"**/.docusaurus",
			"**/.serverless/",
			"**/.fusebox/",
			"**/.dynamodb/",
			"**/.tern-port",
			"**/.vscode-test",
			".yarn/cache",
			".yarn/unplugged",
			".yarn/build-state.yml",
			".yarn/install-state.gz",
			"**/.pnp.*",
			"**/.webpack/",
			"**/.svelte-kit",
			"**/cmake-build-*/",
			"**/*.iws",
			"**/out/",
			"**/.idea_modules/",
			"**/atlassian-ide-plugin.xml",
			"**/com_crashlytics_export_strings.xml",
			"**/crashlytics.properties",
			"**/crashlytics-build.properties",
			"**/fabric.properties",
			".idea/*",
			"**/.DS_*",
			"**/*.backup.*",
			"**/*.back.*",
			"**/node_modules",
			"**/*.sublime*",
			"**/psd",
			"**/thumb",
			"**/sketch",
			".vscode/*",
			"**/*.code-workspace",
		],
	},
	...fixupConfigRules(
		compat.extends(
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended",
			"plugin:prettier/recommended",
			"plugin:@typescript-eslint/recommended",
		),
	),
	{
		plugins: {
			"react-refresh": reactRefresh,
			react: fixupPluginRules(react),
			prettier: fixupPluginRules(prettier),
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.commonjs,
				...globals.node,
			},

			ecmaVersion: 2022,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					ts: true,
					tsx: true,
				},
			},
		},

		rules: {
			"prettier/prettier": "warn",
			"no-console": "off",
			strict: ["error", "global"],
			"no-dupe-class-members": "error",
			"no-var": "error",
			"no-unused-vars": "off",
			"react/react-in-jsx-scope": "off",
			"react/no-unescaped-entities": "off",
			"react/prop-types": "off",
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",

			"react/jsx-filename-extension": [
				1,
				{
					extensions: [".ts", ".tsx"],
				},
			],

			"array-callback-return": "warn",
			"no-class-assign": "error",
			"no-debugger": "warn",
			"no-dupe-args": "warn",
			"no-dupe-else-if": "warn",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-duplicate-imports": "warn",
			"no-import-assign": "warn",
			"no-promise-executor-return": "warn",
			"no-prototype-builtins": "warn",
			"no-template-curly-in-string": "error",
		},
	},
]
