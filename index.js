module.exports = function setp (object, keys, value) {
  var length = keys.length
  if (length !== 0) {
    var firstKey = keys[0]
    if (length === 1) {
      object[firstKey] = value
    } else {
      if (!(firstKey in object)) {
        object[firstKey] = {}
      }
      setp(object[firstKey], keys.slice(1), value)
    }
  }
}
