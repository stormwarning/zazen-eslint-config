module.exports = {
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
        sourceType: 'module',
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
