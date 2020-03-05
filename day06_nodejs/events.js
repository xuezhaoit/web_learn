const event = require('events').EventEmitter

let  ev = new event()
ev.on('msg', function (a, b, c) {
    console.log('接受到消息')
})

ev.emit('msg', 'a', 'b', '123' )