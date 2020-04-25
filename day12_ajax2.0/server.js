const http = require('http')
const urllib = require('url')
const querystring = require('querystring')

let server = http.createServer((req, res)=>{
    console.log(1111);
    
    let {pathname,qurey} = urllib.parse(req.url,true)
    let data_arr = []
    
    req.on('data', (data)=>{
        data_arr.push(data)
    })

    req.on('end', ()=>{
        let data_post = querystring.parse(Buffer.concat(data_arr).toString())
        console.log(pathname,qurey,data_post);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.write('123');
        res.end();
    })
})

server.listen(8080)
