module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: { experimentalObjectRestSpread: true },
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    plugins: ['import'],
    extends: ['standard', './code-style.js', './best-practices.js'],
    rules: {},
}
