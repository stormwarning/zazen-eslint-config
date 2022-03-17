---
'@zazen/eslint-config': minor
---

Remove `eslint-plugin-prettier` from extended rulesets

Per [Prettier’s integration recommendations](https://prettier.io/docs/en/integrating-with-linters.html), Prettier is run separately from
ESLint. Should update `lint-staged` config to include `prettier --write` for
appropriate files.
