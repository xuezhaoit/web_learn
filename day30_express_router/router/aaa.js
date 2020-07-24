const express = require('express')
console.log("欢迎来到aaa");
let router = express.Router()
router.get('', (req,res)=>{
    res.send('aaa的首页')
})
router.get('/a', require('../aaa/a'))
router.get('/b', require('../aaa/b'))
// router.get('/c', require('../aaa/c'))

module.exports=router;
