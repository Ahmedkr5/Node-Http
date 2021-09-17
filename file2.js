// third-party module
const readF = require('read-file');







readF('message.txt','utf-8',(err,buffer)=>{console.log(buffer);});

console.log("async");