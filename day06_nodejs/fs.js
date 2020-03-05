const fs = require('fs')

fs.readFile('../www/1.txt',(err,data)=>{
    if (err) {
        console.log(err)
    } else {
        console.log('成功');
        console.log(data)
    }
})

fs.writeFile('../www/fs_write1.txt', '12324123', err =>{
    console.log(err)
})