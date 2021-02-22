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

### Vue.js projects

Install the optionalDependency `eslint-plugin-vue`:

```shell
npm install --save-dev eslint-plugin-vue
```

Extend the Vue-specific settings in `.eslintrc.js`:

```js
{
    extends: ['@zazen', '@zazen/eslint-config/vue'],
    rules: { /* … */ },
}
```

### TypeScript projects

Install optionalDependencies:

```shell
npm install --save-dev @typescript-eslint/eslint-plugin eslint-config-standard-with-typescript
```

Extend TypeScript-specific settings in `.eslintrc.js`:

```js
{
    extends: ['@zazen', '@zazen/eslint-config/typescript'],
    rules: { /* … */ },
}
```

### Vue.js + TypeScript

Requires some specific parser settings to ensure everything works. See the [Vue.js ESLint TypeScript config](https://github.com/vuejs/eslint-config-typescript) for more details.

```js
{
    parser: require.resolve('vue-eslint-parser'),
    parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
            jsx: true,
        },
    },
}
```

[npm-url]: https://www.npmjs.com/package/@zazen/eslint-config

[npm-img]: https://img.shields.io/npm/v/@zazen/eslint-config.svg?style=flat-square

[npm-dls]: https://img.shields.io/npm/dt/@zazen/eslint-config.svg?style=flat-square

[issues-url]: https://github.com/stormwarning/zazen-eslint-config/issues

[issues-img]: https://img.shields.io/github/issues/stormwarning/zazen-eslint-config.svg?style=flat-square

[eslint]: https://eslint.org

[zazen]: https://github.com/stormwarning/zazen
