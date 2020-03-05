const assert = require('assert')

// 断言，条件为真往下走， 否则提示并终止程序

function sum(a,b) {
    assert(arguments.length == 2, '必须两个参数');
    assert(typeof a == 'number', '第一个参数必须数字');
    assert(typeof b == 'number', '第二个参数必须数字');
    return a + b 

}

console.log(sum(12, '123'))