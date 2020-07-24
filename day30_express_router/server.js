const express = require('express');
let server = express()
server.listen(8080)
let router1 = express.Router()
router1.get('', (req, res)=>{
    res.send('aaaa首页')
})

router1.get('/:id', (req, res)=>{
    res.send('aaaa')
})

router1.get('/:id/commnent', (req, res)=>{
    res.send('aaaa的评论')
})
router1.get('/:id/detail', (req, res)=>{
    res.send('aaaa的详情')
})


server.use('/aaa', router1)
server.use((req,res)=>{
    res.send('404找不到')
})

/**
 * http://localhost:8080/aaa/aaa
 * http://localhost:8080/aaa/id/commnent
 * http://localhost:8080/aaa/id/detail
 * 
 * */ 