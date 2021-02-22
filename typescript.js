/**
 * TypeScript project rules
 * @see https://github.com/standard/eslint-config-standard-with-typescript
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
 */
module.exports = {
    extends: ['standard-with-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
    },
}
