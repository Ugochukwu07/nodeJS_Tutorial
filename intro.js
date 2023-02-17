// const {readFile, writeFile} = require('fs')

// console.log('Start')
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     // console.log(result)
//     const first = result;
//     readFile('./content/secound.txt', 'utf-8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return;
//         }
//         const secound = result
//         writeFile(
//             './content/third.txt',
//             `Here IS THE RESULT : ${first}, ${secound}`,
//             (err, result) => {
//                 if(err){
//                 console.log(err)
//                 return;
//                 }else{
//                     // console.log(result)
//                     console.log('Done with this task')
//                 }
//             }
//         )
//     })
// })
// console.log('Starting the next one')

// const {readFileSync, writeFileSync} = require('fs');

// console.log('Start')

// const first = readFileSync('./content/first.txt', 'utf-8')
// const secound = readFileSync('./content/secound.txt', 'utf-8')

// console.log(first, secound)

// writeFileSync(
//     './content/third.txt', 
//     `hello world ${first}, ${secound}`,
//     {flag: 'a'}
// )

// console.log('Done with this task')
// console.log('Starting the next one')

// const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log(err)
//         return;
//     }
//     // console.log(result)
//     const first = result;
//     readFile('./content/secound.txt', 'utf-8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return;
//         }
//         const secound = result
//         writeFile(
//             './content/third.txt',
//             `Here IS THE RESULT : ${first}, ${secound}`,
//             (err, result) => {
//                 if(err){
//                 console.log(err)
//                 return;
//                 }else{
//                     console.log(result)
//                 }
//             }
//         )
//     })
// })

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8')
// const secound = readFileSync('./content/secound.txt', 'utf-8')

// console.log(first, secound)

// writeFileSync(
//     './content/third.txt', 
//     `hello world ${first}, ${secound}`,
//     {flag: 'a'}
//     )

// const path = require('path');

// const file_path = path.join('/content', 'subFolder', 'text.txt')
// // console.log(path.sep)
// console.log(file_path)

// const base = path.basename(file_path)
// console.log(base)

// const absolute = path.resolve(__dirname, 'content', 'subFolder', 'text.txt')
// console.log(absolute)

// const os = require('os')

// console.log(os.userInfo().username)
// console.log(`The system Uptime is ${os.uptime()} secounds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem()/8/1024/1024,
//     freeMem: os.freemem()
// }

// console.log(currentOS)
// const {jonh, doe, sayHi} = require('./name')

// sayHi('susan')
// sayHi(jonh)
// sayHi(doe)

// const number = 1

// if(number > 10){
//     console.log('Number is smaller');
// }else{
//     console.log('Number is bigger')
// }

// console.log(__dirname)
// let x = 0
// setInterval(() => {
//     if(x > 3){
//         clearInterval(this)
//     }
//     console.log('hello world', x)
//     x++
// }, 1000)