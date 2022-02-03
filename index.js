'use strict'

module.exports = {
    root: true,
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    env: {
        es2021: true,
    },
    plugins: ['prefer-let'],
    /**
     * @see https://github.com/xojs/eslint-config-xo
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn
     * @see https://github.com/import-js/eslint-plugin-import
     * @see https://github.com/xjamundx/eslint-plugin-promise
     * @see https://github.com/prettier/eslint-plugin-prettier
     */
    extends: [
        'xo',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended',
    ],
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
            /**
             * @see https://github.com/xojs/eslint-config-xo-typescript
             * @see https://github.com/cartant/eslint-plugin-etc
             */
            extends: [
                'xo-typescript',
                'plugin:etc/recommended',
                'plugin:prettier/recommended',
            ],
            rules: {
                'etc/prefer-less-than': 'error',
            },
        },
    ],
}
