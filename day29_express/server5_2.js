const express = require('express');
const pathLib = require('path');
const { info } = require('console');
let server = express()
console.warn(1111);

server.listen('8080')
console.info(pathLib.resolve('a.txt'))
server.get('/aaa',(req, res, next)=>{
    // res.sendStatus(404)
    // res.sendFile( pathLib.resolve('a.txt')) 
    // 重定向
    res.redirect('http://www.baidu.com/');
})

