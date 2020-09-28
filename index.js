module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ['prefer-let'],
    extends: ['standard', './code-style.js', './best-practices.js'],
    rules: {
        /**
         * @see https://github.com/cowboyd/eslint-plugin-prefer-let
         */
        'prefer-const': 'off',
        'prefer-let/prefer-let': 'error',
    },
}
