function myAjax(options) {
    options.type = options.type || ''
    options.data = options.data || {}
    options.success = options.success || ''
    options.error = options.error || ''
    // 创建xmlrequest
    let xhr = new XMLHttpRequest()
    // 开启连接
    xhr.open('POST','2.php',true)
    // 设置请求头
    // xhr.setRequestHeader()
    // 发送
    xhr.send('a=1&b=2')

    // 接受
    xhr.onreadystatechange=function (params) {
        if (xhr.readyState==4) {
            if (xhr.status>200 && xhr.status<300 || xhr.status == 304) {
                alert('成功：'+xhr.responseText)
            } else {
                alert('失败')
            }
        }
        
    }


}