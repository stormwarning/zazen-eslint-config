/**
 * Vuejs project rules.
 * @see https://eslint.vuejs.org/rules/
 * @see https://github.com/vuejs/eslint-config-typescript
 */
module.exports = {
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'plugin:vue/vue3-recommended',
        './typescript',
        'plugin:prettier/recommended',
    ],
}
