const koa = require('koa')
const koaRouter = require('koa-router')
const fs = require('fs')
const path = require('path')

// 读取数据
let data = JSON.parse(fs.readFileSync('./.exported'))
console.log(data);


// 创建服务
let server = new koa()
console.log('启动服务：8081。。。');
server.listen(8081)

// 设置请求头解决跨域问题
server.use(async (cxt,next)=>{
    console.log('设置响应头');
    
    cxt.set('Access-Control-Allow-Origin', '*');
    await next()
})

//创建路由
let router = new koaRouter()
router.get('/list',cxt=>{
    console.log('list...');
    
    cxt.body = [
        1,2,3
    ]
})
server.use(router.routes())