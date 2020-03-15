const fs = require('fs')
let fs_r = fs.createReadStream('./www/1.png')
let fs_w = fs.createWriteStream('./upload/2.png')
fs_r.pipe(fs_w)