---
'@zazen/eslint-config': major
---

Include TypeScript rules in default config

Also rolls `eslint-config-standard` back to the latest stable version, which
required a rollback of `eslint-plugin-node` and `eslint-plugin-promise` in order
for all the peerDependencies to be copacetic.
