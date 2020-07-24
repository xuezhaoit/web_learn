const express = require('express');
const multer = require('multer');
const cookieParser = require('cookie-parser');

let server = express();
server.listen('8080')


server.use(cookieParser('123sdfadsfasdfadsfasfas'))

server.get('/bbb',(req, res, next)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.cookie('bb',123,{signed:true})
    res.send({aa:123})
})

