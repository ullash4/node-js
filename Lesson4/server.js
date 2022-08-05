const http = require('http')

const port = 4000;
const hostname = '127.0.0.1'

const myServer = http.createServer((req, res)=>{
    res.writeHead(202, {'content-type':'text/html'})
    res.write('<h1>hlw world</h1>')
    res.write('<h1>hlw world</h1>')
    res.write('<h1>hlw world</h1>')
    res.write('<h1>hlw world</h1>')
    res.end()
})

myServer.listen(port, ()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})