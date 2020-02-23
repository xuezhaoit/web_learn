let arr = []
let name = '1234'
let data = {a:'123',b:'1234',c:'12345'}
// console.log(`${name}`)
for (let key in data) {
    arr.push(`${key}=${data[key]}`)
}
console.log(arr.join("&"))
