const express = require('express');
let server = express()
console.warn(1111);

server.listen('8080')

server.get('/aaa',(req, res)=>{
    res.send({aa:123})
    console.log(3333);
    
})

server.post('/bbb',(req, res)=>{
    console.log(2222);
    
})