function test1(value) {
    return /^[a-zA-Z]+(([\s.,]|,\s)?[a-zA-Z]+)*$/g.test(value);
}   
console.log(test1("Jack, jqd jafd"));
// console.log(//test("Jack, jqd jafd"));
