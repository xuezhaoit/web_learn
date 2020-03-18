let cluster = require('cluster')
let os = require('os')
let http = require('http')
let process = require('process') 
let fs = require('fs')
let url = require('url')

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
    console.log('主进程');
    
} else {
    
    let server = http.createServer((req, res)=>{
        console.log(process.pid);
        let pathname = url.parse(req.url).pathname
        let rs = fs.createReadStream(`www${pathname}`)
        rs.pipe(res)
        rs.on('error', ()=>{
            console.log('读取不到：'+ pathname);
            
            res.writeHead(404)
            res.write('not Found')
            res.end()
        })
        
    })

    server.listen(8080)
    console.log('子进程');
    
}