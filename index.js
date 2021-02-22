module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
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
}
