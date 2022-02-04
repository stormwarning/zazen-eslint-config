'use strict'

module.exports = {
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
        'import/named': 'off',

        'etc/prefer-less-than': 'error',
    },
}
