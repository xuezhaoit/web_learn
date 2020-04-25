
const express = require('express');     //主体
const body = require('body-parser');    //接收普通POST数据
const multer = require('multer');       //接收文件POST数据

let server = express()
server.listen(8080)


// 使用中间件
server.use(body.urlencoded({extended: false}))
let multer_obj = multer({dest: './upload/'})
server.use(multer_obj.any())

server.post('/api', (req, res)=>{
    // if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //   }
    
      res.send("OK");
    
      console.log(req.body);      //普通POST数据
      console.log(req.files);     //文件POST数据

})

server.use(express.static('./www/'))
