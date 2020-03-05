const http = require('http')
const url = require('url')

let server = http.createServer((req, res)=>{
    // 获取pathname 和query
    let {pathname, query} = url.parse(req.url,true)
    console.log( {pathname, query})
    res.end;
})

server.listen(8080)