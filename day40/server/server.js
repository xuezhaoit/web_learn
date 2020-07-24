const koa = require('koa')
const koaRouter = require('koa-router')

// 创建服务
let server = new koa()
console.log('服务启动8081。。。');

server.listen(8081)

server.use(async (cxt,next)=>{
    console.log('设置响应头');
    
    cxt.set('Access-Control-Allow-Origin', '*');
    await next()
})

// 创建路由

let router = new koaRouter()
router.get('/list', cxt=>{
    console.log('收到请求');
    
    cxt.body=[
        {name:'手表',price:100,num:1},
        {name:'电脑',price:100,num:2},
        {name:'衣服',price:100,num:3}
    ]
})

server.use(router.routes())