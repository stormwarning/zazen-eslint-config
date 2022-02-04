# Change Log

## 5.0.0

### Major Changes

- [#240](https://github.com/stormwarning/zazen-eslint-config/pull/240) [`413dff9`](https://github.com/stormwarning/zazen-eslint-config/commit/413dff92990862d0ea1987bd5985f51110b428c5) Thanks [@stormwarning](https://github.com/stormwarning)! - Use XO instead of Standard as a baseline

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
