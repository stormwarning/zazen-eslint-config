/**
 * @see https://github.com/eslint/eslint/issues/3458
 * @see https://www.npmjs.com/package/@rushstack/eslint-patch
 */
require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
const config = {
	/**
	 * @see https://github.com/xojs/eslint-config-xo-typescript
	 * @see https://github.com/cartant/eslint-plugin-etc
	 */
	extends: ['xo-typescript', 'plugin:etc/recommended', 'prettier'],
	rules: {
		'import/named': 'off',

		'etc/prefer-less-than': 'error',
	},
}

module.exports = config
