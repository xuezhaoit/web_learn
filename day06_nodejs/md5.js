let crypto = require('crypto')
let obj = crypto.createHash('md5')
obj.update('123')
obj.update('asd')

console.log(obj.digest('hex'))
