const http = require('http')
const url = require('url')
const queryString = require('querystring')

let server = http.createServer((req, res)=>{
    // get 请求
    let {pathname, query } = url.parse(req.url,true)
    console.log(req.url)
    // post 请求
    let str = '';
    req.on('data', function (datas) {
        str = str + datas
    })

    req.on('end',function (params) {
        console.log(str)
        let obj = queryString.parse(str)
        console.log(obj,pathname,query)
        res.end()
    })
})

server.listen(8080)