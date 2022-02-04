import test from 'ava'
import { ESLint } from 'eslint'
import isPlainObj from 'is-plain-obj'

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
        '\'use strict\';\nconsole.log("unicorn")\n',
        config,
    )
    t.true(hasRule(errors, 'quotes'), JSON.stringify(errors))
})
