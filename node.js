'use strict'

module.exports = {
    plugins: ['n'],
    /**
     * @see https://github.com/weiran-zsd/eslint-plugin-node
     */
    extends: ['plugin:n/recommended', 'plugin:prettier/recommended'],
    rules: {
        /**
         * We have this enabled in addition to `import/extensions` as
         * this one has an auto-fix.
         */
        'n/file-extension-in-import': [
            'error',
            'always',
            /**
             * TypeScript doesn't yet support using extensions and
             * fails with error TS2691.
             */
            { '.ts': 'never', '.tsx': 'never' },
        ],
        'n/no-deprecated-api': 'error',
        'n/no-mixed-requires': ['error', { grouping: true, allowCall: true }],
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-unpublished-bin': 'error',
        'n/prefer-global/buffer': ['error', 'never'],
        'n/prefer-global/console': ['error', 'always'],
        'n/prefer-global/process': ['error', 'never'],
        'n/prefer-global/text-decoder': ['error', 'always'],
        'n/prefer-global/text-encoder': ['error', 'always'],
        'n/prefer-global/url-search-params': ['error', 'always'],
        'n/prefer-global/url': ['error', 'always'],
        'n/prefer-promises/dns': 'error',
        'n/prefer-promises/fs': 'error',
        'n/process-exit-as-throw': 'error',
    },
}
