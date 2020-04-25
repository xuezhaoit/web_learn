const http = require('http')
const ws_io = require('socket.io')

let http_server = http.createServer(()=>{})
http_server.listen(8080)
let ws_server = ws_io.listen(http_server)

let arr_sock= []

ws_server.on('connection',sock=>{
    // console.log(sock);
    
    arr_sock.push(sock)
    sock.on('disconnect',()=>{
        let n = arr_sock.indexOf(sock)
        if (n != -1) {
            arr_sock.splice(n,1)
        }
    })
    sock.on('msg',(str)=>{
        console.log(str);
        
        arr_sock.forEach((sock_,index,arr)=>{
            if (sock != sock_) {
                sock_.emit('msg',str)
            } 
        })
    })
})
setInterval(()=>{
    console.log(arr_sock.length);
},5000)

