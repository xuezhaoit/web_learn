const fs = require('fs')
const zlib = require('zlib');
const http = require('http')

let server = http.createServer((req, res)=>{
    // console.log(req);
    
    let url = 'www'+req.url
    console.log(url);
    let rs = fs.createReadStream(url)
    res.setHeader('content-encoding', 'gzip');

    let gz=zlib.createGzip();
    rs.pipe(gz).pipe(res);

    rs.on('error', err=>{
        res.writeHeader(404);
        res.write('Not Found');

        res.end();
    });
})

server.listen(8080)
 
