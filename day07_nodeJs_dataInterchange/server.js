const http = require('http')
const fs = require('fs')

// 创建服务
let server = http.createServer((req,res)=>{
    // 获取请求路径
    console.log(req.url)
    // 获取文件
    fs.readFile('../www'+req.url,(err,data)=>{
        if (err) {
            res.writeHead('404')
            res.write('not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})
// 设置监听端口
server.listen(8080)