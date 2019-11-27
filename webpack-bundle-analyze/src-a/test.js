/************ commonjs 拷贝测试 ******************/
// let number = 0
// exports.number = number

// setTimeout(() => {
//     number += 1
// }, 1000)


/************ commonjs 浅拷贝测试 ******************/
// const foo = {
//     number: 0
// }

// exports.foo = foo

// setTimeout(() => {
//     foo.number += 1
// }, 1000)


/************** es module 引用测试 ***********************/
export let number = 0

setTimeout(() => {
    number += 1
}, 1000)