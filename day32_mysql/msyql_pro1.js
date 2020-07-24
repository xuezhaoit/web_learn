const koa=require('koa');
const router=require('koa-router');
const mysql=require('mysql-pro');
console.info("mysql启动了。。。")
// let db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', port: 3306, database: 'learn_web'})
let db = new mysql({
    mysql:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'root',
        database:'learn_web'
    }
})
const server=new koa();
server.listen(8080);

let r1=router();
server.use(r1.routes());

r1.get('/user', async ctx=>{
    await db.startTransaction()
    let data = await db.executeTransaction('SELECT * FROM user_table1 WHERE id = 1;')
    await db.stopTransaction()
  console.log(data);
  ctx.response.body=data;
});
