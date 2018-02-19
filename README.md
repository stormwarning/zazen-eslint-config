# zazen-eslint-config

[![npm version][npm-img]][npm-url]
[![npm downloads][npm-dls]][npm-url]

[ESLint][] configuration for [zazen][]-generated projects.

## Usage

Install the conventions by running:

```sh
npm install --save-dev eslint @zazen/eslint-config
```

Then add the extends to your `.eslintrc.js`:

```js
{
  extends: '@zazen/eslint-config',
  rules: { /* … */ }
}
```

[npm-url]: https://www.npmjs.com/package/@zazen/eslint-config

[npm-img]: https://img.shields.io/npm/v/@zazen/eslint-config.svg?style=flat-square

[npm-dls]: https://img.shields.io/npm/dt/@zazen/eslint-config.svg?style=flat-square

[issues-url]: https://github.com/stormwarning/zazen-eslint-config/issues

[issues-img]: https://img.shields.io/github/issues/stormwarning/zazen-eslint-config.svg?style=flat-square

[eslint]: https://eslint.org

[zazen]: https://github.com/stormwarning/zazen
