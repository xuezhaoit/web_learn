const express = require('express')
let router = express.Router()

console.log("欢迎来到article");

/*
* * 模块1;article
 * http://localhost:8080/article/
 * http://localhost:8080/article/id/                内容
 * http://localhost:8080/article/id/comment         评价
 * http://localhost:8080/article/id/edit            编辑
 * 
*/ 
router.get('', (req, res )=>{
    res.send('article的首页')
})
router.use('/aaa', require('./aaa'));

router.get('/:id', (req, res )=>{
    let param = req.params
    console.log(param);
    
    res.send(`article${param.id}的首页`)
})

router.get('/:id/comment', (req, res )=>{
    let param = req.params
    console.log(param);
    
    res.send(`article的${param.id}的评论`)
})

router.get('/:id/edit', (req, res )=>{
    let param = req.params
    console.log(param);
    
    res.send(`article的${param.id}的编辑`)
})


// router.use('/aaa', require('./aaa'))

module.exports = router
