const express = require('express');
const multer = require('multer');
const cookieParser = require('cookie-parser');

let server = express();
server.listen('8080')


server.use(cookieParser({}))

server.get('/bbb',(req, res, next)=>{
    console.log(req.cookies);
    res.cookie('aa',123)
    res.send({aa:123})
})

