module.exports = {
    root: true,
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['prefer-let'],
    /**
     * @see https://github.com/standard/eslint-config-standard
     * @see https://github.com/prettier/eslint-plugin-prettier
     */
    extends: ['standard', 'plugin:prettier/recommended'],
    rules: {
        'no-console': 'warn',

        /**
         * @see https://github.com/cowboyd/eslint-plugin-prefer-let
         */
        'prefer-const': 'off',
        'prefer-let/prefer-let': 'error',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            extends: [
                'standard-with-typescript',
                'plugin:prettier/recommended',
            ],
            rules: {
                /**
                 * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
                 */
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    { argsIgnorePattern: '^_', ignoreRestSiblings: true },
                ],
            },
        },
    ],
}
