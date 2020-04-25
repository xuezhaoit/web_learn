const http = require('http')
const io = require('socket.io')

let httpserver = http.createServer()
httpserver.listen(8080)

let wsserver = io.listen(httpserver)
wsserver.on('connection',sock=>{
    // console.log(sock);
    // sock.on 接受
    // sock.emit 发送
    // sock.on('aaa',(a,b,c)=>{
    //     console.log(a,b,c);
        
    // })
    // setInterval(()=>{
    //     console.log(new Date().getTime());
        
    //     sock.emit('t', new Date().getTime())
    // },2000)

    setInterval(function (){
        sock.emit('t', new Date().getTime());
      }, 1000)
   
    
})