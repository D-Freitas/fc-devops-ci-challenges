import assert from 'node:assert/strict'
import { test } from 'node:test'

import { sum } from './sum.js'

test('shoud sum two numbers', () => {
  assert.strictEqual(sum(1, 2), 3)
})
