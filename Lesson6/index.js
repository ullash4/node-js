const http = require('http');
const fs = require('fs');
const PORT = 2000;
const hostName = 'localhost';


const server = http.createServer((req, res)=>{
    const handleReadFile = (statusCode, fileLocation) =>{
        fs.readFile(fileLocation, (err, data)=>{
            res.writeHead(statusCode, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }

    if(req.url === '/'){
        handleReadFile(200,'./views/index.html')
    }
    else if(req.url === '/contact'){
        handleReadFile(200,'./views/contact.html')
    }
    else if(req.url === '/about'){
        handleReadFile(200,'./views/about.html')
    }
    else{
        handleReadFile(200,'./views/error.html')
    }
})

server.listen(PORT, hostName, ()=>{
    console.log(`server runnig in http://${hostName}:${PORT}`);
})