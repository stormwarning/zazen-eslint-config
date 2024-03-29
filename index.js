/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
const config = {
	root: true,
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	env: {
		es2021: true,
	},
	reportUnusedDisableDirectives: true,
	plugins: ['prefer-let'],
	/**
	 * @see https://github.com/xojs/eslint-config-xo
	 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
	 * @see https://github.com/import-js/eslint-plugin-import
	 * @see https://github.com/xjamundx/eslint-plugin-promise
	 * @see https://github.com/prettier/eslint-config-prettier
	 */
	extends: [
		'xo',
		'plugin:unicorn/recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'prettier',
	],
	rules: {
		'no-console': 'warn',

		/**
		 * @see https://github.com/cowboyd/eslint-plugin-prefer-let
		 */
		'prefer-const': 'off',
		'prefer-let/prefer-let': 'error',

		'unicorn/consistent-destructuring': 'off',
		'unicorn/consistent-function-scoping': 'off',
		/** https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md */
		'unicorn/expiring-todo-comments': ['warn', { terms: ['@todo'] }],
		'unicorn/no-null': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/prefer-ternary': ['error', 'only-single-line'],
		/** https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md */
		'unicorn/prevent-abbreviations': [
			'error',
			{ allowList: { args: true, lib: true } },
		],

		'promise/param-names': 'error',
		'promise/no-return-wrap': ['error', { allowReject: true }],
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/valid-params': 'error',
		'promise/prefer-await-to-then': 'error',

		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': ['error', 'always', { ignorePackages: true }],
		'import/first': 'error',
		'import/named': 'error',
		'import/namespace': ['error', { allowComputed: true }],
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'error',
		'import/no-cycle': ['error', { ignoreExternal: true }],
		'import/no-duplicates': 'error',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/__tests__/**/*.{mjs,js,ts,tsx}',
					'**/*.@(spec|test).{mjs,js,ts,tsx}',
				],
			},
		],
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-default': 'error',
		'import/no-self-import': 'error',
		'import/no-unresolved': 'off',
		'import/no-useless-path-segments': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					['sibling', 'index'],
					'type',
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '*.+(css)',
						group: 'type',
						position: 'after',
						patternOptions: {
							matchBase: true,
						},
					},
				],
			},
		],
	},
}

module.exports = config
