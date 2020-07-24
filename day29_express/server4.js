const express = require('express');
let server = express()
console.warn(1111);

server.listen('8080')

server.get('/aaa',(req, res, next)=>{
    res.send({aa:123})
    console.log(3333);
    next()
})

server.get('/aaa',(req, res, next)=>{
    console.log("第二次");
})

server.use(express.static('www/'))