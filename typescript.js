/**
 * TypeScript project rules
 * @see https://github.com/standard/eslint-config-standard-with-typescript
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
 */
module.exports = {
    extends: ['standard-with-typescript', './', 'plugin:prettier/recommended'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
    },
}
