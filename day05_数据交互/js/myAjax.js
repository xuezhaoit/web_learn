function myAjax(options) {
    options.type = options.type || 'GET'
    options.data = options.data || {}
    options.url = options.url || ''
    // 创建xmlrequest
    let xhr = new XMLHttpRequest()

    // 处理数据
    // aa=1&bb=2
    let arr = []
    for (let key in options.data) {
        arr.push(`${encodeURIComponent(key)}=${encodeURIComponent(options.data[key])}`)
    }
    let str_data = arr.join("&")
    

    // 开启连接
    if (options.type == 'POST' ) {
        xhr.open('POST', options.url, true)
        // 设置请求头
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
        // 发送
        xhr.send(str_data)
    }else{
        xhr.open('GET', options.url+'?'+str_data, true)
        // 发送
        xhr.send()
    }
    
    // 接受
    xhr.onreadystatechange=function (params) {
        if (xhr.readyState==4) {
            console.log(xhr.status)
            if (xhr.status>=200 && xhr.status<300 || xhr.status == 304) {
                // 处理返回的报文
                let data = xhr.responseText
                switch (options.dataType) {
                    case "json":
                        // 兼容性处理
                        if (window.JSON &&　JSON.parse　) {
                            data = JSON.parse(data)
                        } else {
                            data = eval('('+str+')');
                        }
                        break;
                    case 'xml':
                        data = xhr.responseXML
                        break;
                }
                alert('成功：'+data)
                options.success && options.success(data)
            } else {
                alert('失败')
                options.error && options.error()
            }
        }
        
    }


}