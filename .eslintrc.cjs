module.exports = {
	plugins: ['unicorn'],
	extends: ['./index.js'],
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		node: true,
	},
	rules: {
		'unicorn/prefer-module': 'off',
	},
}
