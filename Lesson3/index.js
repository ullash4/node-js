// OS, path

// const os = require('os')
const { totalmem, freemem } = require('os')

// console.log(os.userInfo());
// console.log(os.homedir());

// console.log(os.hostname());
console.log(totalmem());
console.log(freemem());

console.log(__dirname);
console.log(__filename);