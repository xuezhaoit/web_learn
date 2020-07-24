const express = require('express')
let router = express.Router()
console.log("欢迎来到user");
router.get('/:id', (req, res )=>{
    res.send('用户的首页')
})

router.get('/:id/comment', (req, res )=>{
    res.send('用户的评论')
})




module.exports=router
