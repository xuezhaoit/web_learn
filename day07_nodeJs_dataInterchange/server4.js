const http = require('http')
const url = require('url')
const queryString = require('querystring')
const fs = require('fs')

//模拟数据库
let users = {
    zhangsan : '123456789',
    lisi : '123456789'
}

let server = http.createServer((req, res)=>{
    // get 请求
    let { pathname, query } = url.parse(req.url,true)

    // post 请求
    let str = '';
    req.on('data', function (datas) {
        str = str + datas
    })

    req.on('end',function (params) {
        let query_post = queryString.parse(str)
        let {user, passwd}= query_post
        switch (pathname) {
            //注册
            case '/regist':
                if (! user) {
                    res.write('{ err: 1, msg: user is required }')
                }else if( ! passwd ){
                    res.write('{ err: 1, msg: passwd is required }')
                }else if(! /^\w{4,16}$/.test(user)) {
                    res.write('{ err: 1, msg: invalid user }')
                }else if(! /^\w{8,16}$/.test(passwd)) {
                    res.write('{ err: 1, msg: invalid passwd }')
                }else if ( /^['|"]$/.test(user)){
                    res.write('{ err: 1, msg: invalid passwd }')
                }else if ( users[user]) {
                    res.write('{ err: 1, msg: user is already exist }')
                }else {
                    users[user] = passwd
                    res.write('{ err: 0, msg: regist success }')
                }
                break;
            // 登录
            case '/login':
                console.log(user)
                if (! user) {
                    res.write('{ err: 1, msg: user is required }')
                }else if( ! passwd ){
                    res.write('{ err: 1, msg: passwd is required }')
                }else if(!/^\w{4,16}$/.test(user)) {
                    res.write('{ err: 1, msg: invalid user }')
                }else if(!/^\w{8,16}$/.test(passwd)) {
                    res.write('{ err: 1, msg: invalid passwd }')
                }else if ( ! users[user]) {
                    res.write('{ err: 1, msg: user is not exist }')
                }else if ( users[user] != passwd  ) {
                    res.write('{ err: 1, msg: user or passwd is incorrect }')
                }else {
                    
                    res.write('{ err: 0, msg: login success }')
                }
                break;

            default:
                 // 读取文件
                fs.readFile(`../www${ pathname }`,(err,data)=>{
                    if (err) {
                        res.writeHead(404);
                        res.write('not found');
                    } else {
                        res.write(data)
                    }
                   
                })
                
                break;
        } 
        res.end()

    })
})

server.listen(8080)