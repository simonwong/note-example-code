/************** commonjs **************/
// const { logText } = require('./test')

// console.log(logText)


/************** es module **************/
// import test, { foo } from './test'

// console.log(test.logText)
// foo()


/************** es module 混合 commonjs **************/
import { logText } from './test'

console.log(logText)
