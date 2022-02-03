module.exports = {
    plugins: ['unicorn'],
    extends: ['./index.js', './node.js'],
    env: {
        node: true,
    },
    rules: {
        'unicorn/prefer-module': 'off',
    },
}
