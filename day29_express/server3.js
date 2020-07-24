const express = require('express');
let server = express()
console.warn(1111);

server.listen('8080')

server.get('/aaa',(req, res)=>{
    res.send({aa:123})
    console.log(3333);
    console.log(express.static('www/'));
    
    
})

server.use(express.static('www/'))