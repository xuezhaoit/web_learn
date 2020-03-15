const http = require('http')
const common = require('./libs/common.js')
const uuid = require('uuid')
const fs = require('fs')


let server = http.createServer((req, res)=>{
    let data_arr = []
     
    req.on('data',(data)=>{
        
        data_arr.push(data)
    })

    req.on('end', ()=>{
    //     console.log(req.headers);
        
    //    console.log(Buffer.concat(data_arr).toString());
    // 合并文件数据
    let data = Buffer.concat(data_arr)
    // console.log(typeof(data));
    // console.log(data);
    
    // 
    let post = {}
    if (req.headers['content-type']) {
        // 1.用"<分隔符>"切开数据
        let content_type = req.headers['content-type'].split('; ')[1]
        if (content_type) {
            let boundary = '--' + content_type.split('=')[1] 
            // console.log(boundary);
            
            let data_arr = data.split(boundary)
            // 2.丢弃头尾元素
            // console.log(data_arr.toString());
            // console.log('1111');
            
            data_arr.pop()
            data_arr.shift()
            // console.log( data_arr.toString());
            // 3.丢弃每一项的头尾\r\n
            data_arr = data_arr.map((value, index )=>{
                let value_ = value.slice(2,-2)
                return value_
            })
            // 4.用第一次出现的"\r\n\r\n"切分
            // console.log(data_arr.toString());
            
            // 数据描述\r\n\r\n数据值,
            // 数据描述1\r\n数据描述2\r\n\r\n<文件内容>
            data_arr.forEach((param) => {
                let [description, content] = param.split('\r\n\r\n')
                // console.log('11111');
                
                // console.log(description.toString());
                // console.log(content.toString());
                // console.log('22222');
                
                if (description.split('\r\n')==-1) {
                    // Content-Disposition: form-data; name="pass"
                    let name = description.split('; ')[1]
                    let [name1, name2] = name.split('=')
                    name2 = name2.slice(1,-1)

                    // 
                    post[name2]=content
                    // console.log(post);
                    
                    
                } else {
                    let [description1,description2] = description.split('\r\n')
                    // Content-Disposition: form-data; name="f1"; filename="a.txt"\r\n
                    // Content-Type: text/plain\r\n
                    // console.log('123f');
                    
                    // console.log(description1.toString());
                    
                    let [, name, filename] = description1.split('; ')
                    // console.log(name);
                    
                    let [, name1] = name.split('=')
                    name1 = name1.slice(1,-1).toString()
                    let [, filename1] = filename.split('=')
                    filename1 = filename1.slice(1,-1).toString()
                    let [,type] = description2.split(': ')
                    // console.log(name1.toString());
                    // console.log(filename1.toString());
                    // console.log(type.toString());
                    let path = `upload/${uuid.v4().replace('/\-/g','')}`
                    fs.writeFile(path, content, err=>{
                        if (err) {
                            console.log('111');
                            
                            res.write('上传失败')
                        } else {
                            console.log('222');
                            
                            res.write('上传成功')
                        }
                    })
                    // 5.判断描述的里面有没有"\r\n"
                    
                    
                }
              
            });
            // 6.分析"数据描述"
        }
        
    }
    

        // let buffer_data_arr = Buffer.concat(data_arr)
        // buffer_data_arr.split('')
    })
})

server.listen(8080)

