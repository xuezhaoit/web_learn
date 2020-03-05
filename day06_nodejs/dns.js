const dns = require('dns');
let obj = dns.resolve('www.baidu.com',(err,res)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})