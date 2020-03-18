const http = require('http')
const url = require('url')
const fs = require('fs')

let server = http.createServer((req, res)=>{

    let pathname = url.parse(req.url).pathname
    console.log(pathname);
   
    fs.stat(`www${pathname}`, (err, stat)=>{
        if (err) {
            console.log('没有读到文件:'+pathname);
            res.writeHeader(404)
            res.write('not Found')
            res.end()
        } else {
            // 请求文件时间
            if (req.headers['if-modified-since']) {
                let req_mtime = new Date(req.headers['if-modified-since']).getTime()
                console.log(req_mtime);
                // 服务器上的时间
                let server_time = stat.mtime.getTime()
                console.log(server_time);
                
                if (server_time > req_mtime) {
                    setHtml(stat)
                } else {
                    res.writeHeader(304)
                    console.log('重定向');
                    res.end()
                }
            } else {
                setHtml(stat)
            }
            
        }
    })

    function setHtml(stat) {
        let rs = fs.createReadStream(`www${pathname}`)
        rs.on('error', ()=>{
            res.writeHeader(404)
            res.write('not Found')
            res.end()
        })
        console.log(stat.mtime);
        console.log(stat.mtime.toGMTString());
        
        res.setHeader('Last-Modified',stat.mtime.toGMTString())
        rs.pipe(res)
    }
    function set_404(params) {
        console.log('没有读到文件');
        res.writeHeader(404)
        res.write('not Found')
        res.end()
    }
    // setHtml()
})

server.listen(8080)