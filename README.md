# zazen-eslint-config

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]

[ESLint][] configuration for [zazen][]-generated projects.

## Usage

Install the conventions by running:

```shell
npm install --save-dev eslint @zazen/eslint-config
```

Add the extends to your `.eslintrc.js`:

```js
{
    extends: ['@zazen'],
    rules: { /* … */ },
}
```

Add the Prettier settings to your `package.json`:

```json
"prettier": {
    "semi": false,
    "singleQuote": true,
    "trailingComma": "all"
},
```

### Node projects

Extend the base config as well as the Node-specific rules:

```js
{
    extends: ['@zazen', '@zazen/eslint-config/node'],
    rules: { /* … */ },
}
```

### TypeScript projects

Extend the base config as well as the TypeScript-specific rules:

```js
{
    extends: ['@zazen', '@zazen/eslint-config/typescript'],
    rules: { /* … */ },
}
```

This can be used for JavaScript code as well, but will require a `tsconfig.json` file to be present.

### Vue.js projects

Removed for now until/unless I get more opinionated about Vue code. For now, install `eslint-plugin-vue` per-project, and extend the recommended config in addition to the base config here.

```js
{
    extends: [
        'plugin:vue/[vue3-]recommended',
        '@zazen',
        'prettier',
    ],
    rules: { /* … */ },
}
```

The TypeScript rules can be included as well, but remember to [set the `parser` option correctly](https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error).

[npm-url]: https://www.npmjs.com/package/@zazen/eslint-config
[npm-img]: https://img.shields.io/npm/v/@zazen/eslint-config.svg?style=flat-square
[npm-dls]: https://img.shields.io/npm/dt/@zazen/eslint-config.svg?style=flat-square
[issues-url]: https://github.com/stormwarning/zazen-eslint-config/issues
[issues-img]: https://img.shields.io/github/issues/stormwarning/zazen-eslint-config.svg?style=flat-square
[eslint]: https://eslint.org
[zazen]: https://github.com/stormwarning/zazen
