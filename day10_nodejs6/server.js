const http = require('http')
const url = require('url')
const mysql = require('mysql')
const fs = require('fs')
const zlib = require('zlib')
const crypto = require('crypto')
const key = 'asdf1234'
function md5(params) {
    let md5_obj = crypto.createHash('md5')
    md5_obj.update(params+key)
    return md5_obj.digest('hex')
}

let server = http.createServer((req, res)=>{
    let db = mysql.createPool({host: 'localhost', user: 'root', password: 'root', port: 3306, database: 'learn_web'})
    let {pathname,query} = url.parse(req.url, true)
    // res.setContentType("text/plain");
    // res.setContentType("application/json");
    let username = query.username
    let passwd = query.passwd
    console.log(query);
    switch (pathname) {
        case '/register':
            res.setHeader('Content-Type','text/plain')
            res.setHeader('Content-Type','application/json')
            // 校验请求参数
            
            
            if (! username) {
                console.log('{"err": 1, "msg": "username can\'t be null"}');
                
                res.write('{"err": 1, "msg": "username can\'t be null"}');
                res.end();
            
            }else if (! passwd) {
                console.log('{"err": 1, "msg": "password can\'t be null"}');
                res.write('{"err": 1, "msg": "password can\'t be null"}');
                res.end()
                // 用户名必须是4-16位的英文或数字
            }else if (!/^\w{4,16}$/.test(username)) {
                console.log("{'err':1, 'msg':'username  is invaild'}");
                res.write('{"err":1, "msg":"username  is invaild"}')
                res.end()
            }else if (/['|"]/.test(passwd) ) {
                console.log("{'err':1, 'msg':'passwd  is invaild'}");
                
                res.write('{"err":1, "msg":"passwd  is invaild"}')
                res.end()
            }else {
                // 查看数据口是否有相同用户
                console.log(`select * from user_table1 where username = ${username} `);
                
                db.query(`select * from user_table1 where username = '${username}' `,(err, data)=>{
                    console.log( data );
                    console.log( err );
                    
                    if (data.length > 0 ) {
                        console.log('{"err":1, "msg":"username  is existed "}');
                        res.write('{"err":1, "msg":"username  is existed "}')
                        res.end()
                    } else {
                       
                        db.query(`INSERT INTO user_table1 (id, username, passwd) VALUES(0, '${username}', '${md5(passwd)}' );`,(err, data )=>{
                            if (err) {
                                console.log('错误日志');
                                
                                console.log(err);
                                
                            } else {
                                console.log(data);
                                
                                res.write('{"err":0, "msg":"success "}')
                                res.end()
                            }
                        })
                        
                    }
                } )
               
            }
            break;
        case '/login':
            res.setHeader('Content-Type','text/plain')
            res.setHeader('Content-Type','application/json')
            // 校验请求参数
            
            if (! username) {
                console.log('{"err": 1, "msg": "username can\'t be null"}');
                
                res.write('{"err": 1, "msg": "username can\'t be null"}');
                res.end();
            
            }else if (! passwd) {
                console.log('{"err": 1, "msg": "password can\'t be null"}');
                res.write('{"err": 1, "msg": "password can\'t be null"}');
                res.end()
                // 用户名必须是4-16位的英文或数字
            }else if (!/^\w{4,16}$/.test(username)) {
                console.log("{'err':1, 'msg':'username  is invaild'}");
                res.write('{"err":1, "msg":"username  is invaild"}')
                res.end()
            }else if (/['|"]/.test(passwd) ) {
                console.log("{'err':1, 'msg':'passwd  is invaild'}");
                
                res.write('{"err":1, "msg":"passwd  is invaild"}')
                res.end()
            }else {
                // 查看数据口是否有相同用户
                
                db.query(`select * from user_table1 where username = '${username}' `,(err, data)=>{
                    if (err) {
                        console.log(err);
                        res.write('{"err":1, "msg":"database error "}')
                        res.end()
                    } else if(data.length == 0)  {
                        console.log('{"err":1, "msg":"username is not exist"}');
                        res.write('{"err":1, "msg":"username is not exist"}')
                        res.end()
                    } else if(data[0].passwd != md5(passwd))  {
                        console.log('{"err":1, "msg":"username or passwd is incorrect "}');
                        res.write('{"err":1, "msg":"username or passwd is incorrect "}')
                        res.end()
                    }else{
                        console.log('{"err":1, "msg":"login success "}');
                        res.write('{"err":1, "msg":"login success "}')
                        res.end()
                    }
                    
                    
                } )
               
            }
            break;
        default:
                
                
               let rs = fs.createReadStream(`www${pathname}`)
               let gzip = zlib.createGzip()
               rs.on('error',()=>{
                    console.log("没找到："+pathname);
                    res.writeHead(404)
                    res.write('not Found:')
                    res.end()
               })
               res.setHeader('content-encoding', 'gzip')
               rs.pipe(gzip).pipe(res)
            break;
    }
})

server.listen(8080)