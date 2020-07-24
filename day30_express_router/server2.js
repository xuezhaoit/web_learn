const express = require('express');
let server = express()
server.listen(8080)

console.log("server2启动");


server.use('/article', require('./router/article'))
server.use('/user', require('./router/user'))
server.use((req,res)=>{
    res.send('404找不到')
})

/**
 * 模块1;article
 * http://localhost:8080/article/
 * http://localhost:8080/article/id/                内容
 * http://localhost:8080/article/id/comment         评价
 * http://localhost:8080/article/id/edit            编辑
 * 
 * http://localhost:8080/article/aaa/a                a
 * http://localhost:8080/article/aaa/b                c
 * http://localhost:8080/article/aaa/c                c
 * 
 * 模块2：user
 * http://localhost:8080/user/                      用户首页
 * http://localhost:8080/user/comment               用户评论
 * 
 * 
 * 
 * */ 