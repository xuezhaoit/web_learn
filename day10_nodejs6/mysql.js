const mysql = require('mysql')
let db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', port: 3306, database: 'learn_web'})
db.query('select * from user_table', (err, data )=>{
    if (err) {
        console.log('错误日志');
        
        console.log(err);
        
    } else {
        
        console.log(data);
    }
    
})