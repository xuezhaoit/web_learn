const fs = require('fs')
fs.stat('www/1.html',(err, stat)=>{
    if (err) {
        console.log('not Found');
        
    } else {
        console.log(stat);
    }
})