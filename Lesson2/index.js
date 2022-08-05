const fs = require('fs')

// console.log(fs);

// fs.writeFile('demo.txt', 'this is my over written text', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successfull');
//     }
// })

// fs.appendFile('demo.txt', '. I am 20 years old', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('append successfully');
//     }
// })

// fs.readFile('demo.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename('demo.txt', 'demo1.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// })

// fs.unlink('demo1.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('successful');
//     }
// })

fs.writeFile('demo.txt', 'this is for text', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successful');
    }
})

fs.exists('demo.txt', (result)=>{
    if(result){
        console.log('found');
    }else{
        console.log('not found');
    }
})