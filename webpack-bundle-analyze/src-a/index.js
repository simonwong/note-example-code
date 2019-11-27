/************ commonjs 拷贝测试 ******************/
// const { number } = require('./test')

// console.log('number', number)
// setTimeout(() => {
//   console.log('after 2s', number)
// }, 2000)


/************ commonjs 浅拷贝测试 ******************/
// const { foo } = require('./test')

// console.log('foo.number', foo.number)
// setTimeout(() => {
//   console.log('after 2s', foo.number)
// }, 2000)


/************** es module 引用测试 ***********************/
import { number } from './test'

console.log('number', number)
setTimeout(() => {
    console.log('after 2s', number)
}, 2000)
