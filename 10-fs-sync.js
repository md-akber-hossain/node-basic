const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

//writeFileSync('./content/new-file.txt', `this is sum : ${first} + ${second}`)

// For appending
writeFileSync('./content/new-file.txt', `this is sum : ${first} + ${second}`, { flag : 'a' })
console.log('done');
