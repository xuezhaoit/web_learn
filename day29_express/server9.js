const express = require('express');
const cookieSession = require('cookie-session');

let server = express();
server.listen('8080')


server.use(cookieSession({
    keys: ['afsfasfasdfsadf', 'xcvxchdftyuftuyfy', 'asdgsdrgse5t6tr5', 'fgdfghfty8654esdghfjhg']
}))

server.get('/bbb',(req, res, next)=>{
    console.log(req.session);
    if(!req.session['count']){
        req.session.count=1;
      }else{
        req.session.count++;
    }
    res.send(`第${req.session.count}次`)
    res.end()
})

