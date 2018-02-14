/**
 * Enforce a consistent code style.
 */
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'arrow-parens': ['error', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        indent: ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    },
}
