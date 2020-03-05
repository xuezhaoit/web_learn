const http = require('http')
const queryString = require('querystring')

let server = http.createServer((req, res)=>{
    // post 请求
    let str = '';
    req.on('data', function (datas) {
        str = str + datas
    })

    req.on('end',function (params) {
        console.log(str)
        let ojb = queryString.parse(str)
        console.log(ojb)
        res.end()
    })
})

server.listen(8080)