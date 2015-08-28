```javascript
var setp = require('setp')
var assert = require('assert')

var firstExample = { }
setp(firstExample, [ 'a', 'b', 'c' ], 'value')
assert.deepEqual(firstExample, { a: { b: { c: 'value' } } })

assert.throws(
  function() {
    setp({ a: 'string' }, [ 'a', 'b', 'c' ], 'value') })
```
