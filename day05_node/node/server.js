const http = require("http")

let server = http.createServer(function (req, res) {
    let oDate=new Date();
    console.log(oDate.getFullYear());
    console.log(req.method);
    console.log('有人执行我了')
})
server.listen(8080)