// url, type="get", data={}, success, error
function ajax(option) {
    option = option || {}
    option.type = option.type || 'get'
    option.data = option.data || {}
    option.dataType = option.dataType || "text"
    // 数据封装
    let arr = []
    for (let key in option.data) {
        arr.push(`${key}=${option.data[key]}`)
    }
    let strData = arr.join('&')
    //不兼容IE6
    let xhr=new XMLHttpRequest();
    //连接
    //true-异步
    //false-同步
    if (option.type == "GET" || option.type == "get") {
        xhr.open(option.type, option.url+'?'+strData, true);
        xhr.send();
    } else {
        xhr.open(option.type, option.url, true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(strData);
    }
    //接收
    xhr.onreadystatechange=function (){
    //4——完事
        if(xhr.readyState==4){
            //成功——2xx、304
            if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
            // alert('成功'+xhr.responseText);
                let res_data = xhr.responseText
                switch (option.dataType) {
                    case 'json':
                        if (window.JSON && JSON.parse) {
                            res_data = JSON.parse(res_data)
                        } else {
                            res_data = eval('('+str+')')
                        }
                        break;
                    case "xml":
                        res_data = xhr.responseXML
                        break;
                }
                option.success && option.success(res_data)
            }else{
                // alert('失败');
                option.error && option.error()
            }
        }
    }
}