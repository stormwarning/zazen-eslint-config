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
        "'use strict';\nfunction q() { const foo = 'FOO'; }\n",
        config,
    )
    t.true(hasRule(errors, 'prefer-let/prefer-let'), JSON.stringify(errors))
})
