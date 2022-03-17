# Change Log

## 5.1.0

### Minor Changes

- [#251](https://github.com/stormwarning/zazen-eslint-config/pull/251) [`1938908`](https://github.com/stormwarning/zazen-eslint-config/commit/1938908e953892508137be30cabc480322be9835) Thanks [@renovate](https://github.com/apps/renovate)! - Update eslint-config-prettier to v8.5.0

* [#246](https://github.com/stormwarning/zazen-eslint-config/pull/246) [`e508988`](https://github.com/stormwarning/zazen-eslint-config/commit/e5089888b57551a69bf2338fd2dccec949ab81d2) Thanks [@renovate](https://github.com/apps/renovate)! - Update eslint-config-xo to v0.40.0

- [#245](https://github.com/stormwarning/zazen-eslint-config/pull/245) [`5f56dda`](https://github.com/stormwarning/zazen-eslint-config/commit/5f56dda3e127195249f629f2190fcddc39832a39) Thanks [@renovate](https://github.com/apps/renovate)! - Update typescript-eslint packages to v5.15.0

* [#250](https://github.com/stormwarning/zazen-eslint-config/pull/250) [`5f8b8e4`](https://github.com/stormwarning/zazen-eslint-config/commit/5f8b8e4a4c6b6d50f040aa68a120810af552829f) Thanks [@renovate](https://github.com/apps/renovate)! - Update eslint-plugin-unicorn to v41

- [#254](https://github.com/stormwarning/zazen-eslint-config/pull/254) [`be8507a`](https://github.com/stormwarning/zazen-eslint-config/commit/be8507ace93533e155e99567479765d19082e7df) Thanks [@renovate](https://github.com/apps/renovate)! - Update eslint-plugin-n to v15

* [#247](https://github.com/stormwarning/zazen-eslint-config/pull/247) [`92a0a8d`](https://github.com/stormwarning/zazen-eslint-config/commit/92a0a8d04c8c6d84e81fd7f2154ba93ba73c12c8) Thanks [@renovate](https://github.com/apps/renovate)! - Update eslint-config-xo-typescript to v0.50.0

- [#261](https://github.com/stormwarning/zazen-eslint-config/pull/261) [`e15148d`](https://github.com/stormwarning/zazen-eslint-config/commit/e15148d7ecc1e7b211849c4aecef523ce7343b61) Thanks [@stormwarning](https://github.com/stormwarning)! - Remove `eslint-plugin-prettier` from extended rulesets

  Per [Prettier’s integration recommendations](https://prettier.io/docs/en/integrating-with-linters.html), Prettier is run separately from
  ESLint. Should update `lint-staged` config to include `prettier --write` for
  appropriate files.

## 5.0.0 — 2022-02-04

#### 💣 Breaking Change

- Use XO instead of Standard as a baseline [#240](https://github.com/stormwarning/zazen-eslint-config/pull/240)

  Extends `eslint-config-xo` (and `eslint-config-xo-typescript`) rules, as well as the config for `import`, `promise`, and `node` plugins from the XO CLI.

  Internal configs do not extend each other, in order to keep things flexible.

## 4.0.0 — 2022-02-02

#### 💣 Breaking Change

- Include TypeScript rules in default config [#237](https://github.com/stormwarning/zazen-eslint-config/pull/237)

  Also rolls `eslint-config-standard` back to the latest stable version, which
  required a rollback of `eslint-plugin-node` and `eslint-plugin-promise` in order
  for all the peerDependencies to be copacetic.

### 3.0.1 — 2022-01-26

#### 🗑️ Removed

- Remove deprecated `standard` plugin [#232](https://github.com/stormwarning/zazen-eslint-config/pull/232)

  As per [standard/standard#1316](https://github.com/standard/standard/issues/1316).

## 3.0.0 — 2022-01-26

#### ♻️ Changed

- Upgrade plugin dependencies to their latest version [#230](https://github.com/stormwarning/zazen-eslint-config/pull/230)

## 2.3.0 — 2021-03-06

#### ♻️ Changed

- Make project type configs standalone [#200](https://github.com/stormwarning/zazen-eslint-config/pull/200)

## 2.2.0 — 2021-02-22

#### ♻️ Changed

- Use a single file for general config [#181](https://github.com/stormwarning/zazen-eslint-config/pull/181)

#### 🎁 Added

- Add TypeScript config [#193](https://github.com/stormwarning/zazen-eslint-config/pull/193)

### 2.1.1 — 2020-11-13

#### 🐛 Fixed

- Ensure Prettier runs as an ESLint plugin [#170](https://github.com/stormwarning/zazen-eslint-config/pull/170)

## 2.1.0 — 2020-09-27

#### 🎁 Added

- Add `prefer-let` rule (and disable `prefer-const`) [#162](https://github.com/stormwarning/zazen-eslint-config/pull/162)

## 2.0.0 — 2020-01-21

#### 💣 Breaking Change

- Drops `prettier-eslint-cli` in favour of running Prettier as an
  eslint rule.

#### ♻️ Changed

- Downgrade `semantic-release` to previous major [[`7dc7a38`](https://github.com/stormwarning/zazen-eslint-config/commit/7dc7a38)]
- Upgrade dependencies ([#115](https://github.com/stormwarning/zazen-eslint-config/issues/115))

## 1.0.0 — 2019-01-23

#### 🎁 Added

- Add Prettier configs for Standard & Vue ([#9](https://github.com/stormwarning/zazen-eslint-config/issues/9))

#### Other updates

- Add license ([4a18a78](https://github.com/stormwarning/zazen-eslint-config/commit/4a18a78))
- Change Vue plugin to an optional dependency ([#7](https://github.com/stormwarning/zazen-eslint-config/issues/7))

## 0.3.0 — 2018-09-09

#### ♻️ Changed

- Upgraded Standard config and associated plugins to latest major version

### 0.2.1 — 2018-09-08

#### 🐛 Fixed

- Add Vuejs plugin as dependency instead of devDependency

## 0.2.0 — 2018-04-17

#### 🎁 Added

- Add optional rules for Vuejs projects

### 0.1.1 — 2018-02-19

#### 🐛 Fixed

- Include missing `import` plugin for rules that reference it

## 0.1.0 — 2018-02-15

### 🎉 Initial project release
