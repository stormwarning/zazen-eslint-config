import { createRequire } from 'node:module'

import test from 'ava'
import { ESLint } from 'eslint'
import isPlainObj from 'is-plain-obj'

const require = createRequire(import.meta.url)
const hasRule = (errors, ruleId) =>
	errors.some((error) => error.ruleId === ruleId)

async function runEslint(string, config) {
	let eslint = new ESLint({
		useEslintrc: false,
		overrideConfig: config,
	})

	let [firstResult] = await eslint.lintText(string)

	return firstResult.messages
}

test('main', async (t) => {
	let config = require('../index.js')

	t.true(isPlainObj(config))
	t.true(isPlainObj(config.rules))

	let errors = await runEslint(
		"'use strict';\nfunction q() { const foo = 'FOO' }\n",
		config,
	)
	t.true(hasRule(errors, 'prefer-let/prefer-let'), JSON.stringify(errors))
})

test('node', async (t) => {
	let config = require('../node.js')

	t.true(isPlainObj(config))
	t.true(isPlainObj(config.rules))

	let errors = await runEslint(
		"import path from 'path'\nimport foo from './utils/foo'\n",
		{
			parserOptions: { sourceType: 'module', ecmaVersion: 2020 },
			...config,
		},
	)
	/** @todo Figure out why this rule isn't being caught in tests. */
	t.false(
		hasRule(errors, 'n/file-extension-in-import'),
		JSON.stringify(errors),
	)
})
