const http = require('http');


const server = http.createServer((req,res)=>{
    res.end("hello world from the user")
})// server certe ho gya hai

server.listen(3000,()=>{
    console.log("serveer is running on port 3000");
    
})